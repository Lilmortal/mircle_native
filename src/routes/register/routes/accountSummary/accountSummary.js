import React, { Component } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import moment from "moment";

import { mapGenderValueToLabel } from "../../../../libs";
import Spinner from "../../../../components/spinner";
import ProfileImage from "../../../../components/profileImage";
import RegisterLayout from "../../layout/registerLayout";
import Biography from "./biography";
import styles from "./styles";

class RegisterAccountSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  setIsLoading = loading => {
    this.setState({
      loading
    });
  };

  render() {
    const {
      register,
      emailAddress,
      firstName,
      surname,
      password,
      gender,
      phoneNumber,
      birthDate,
      occupation,
      profileImage
    } = this.props;

    const user = {
      emailAddress,
      firstName,
      surname,
      password,
      gender,
      phoneNumber,
      birthDate,
      occupation,
    };

    return (
      <RegisterLayout
        title="Is this you?"
        onPress={() => {
          this.setIsLoading(true);
          register(user, profileImage);
        }}
        buttonMessage="SUBMIT"
      >
        <Spinner show={this.state.loading} />
        <View style={styles.profileImage}>
          {profileImage.isDefault
            ? <View>
                <Text>
                  You have not uploaded a profile image, a default profile image
                  will be provided to you once you registered your account.
                </Text>
              </View>
            : <ProfileImage source={profileImage} size={125} />}
        </View>
        <View style={styles.biography}>
          <Biography label="Email address" value={emailAddress} />
          <Biography label="Name" value={`${firstName} ${surname}`} />
          <Biography label="Gender" value={mapGenderValueToLabel(gender)} />
          <Biography label="Phone Number" value={phoneNumber} />
          <Biography
            label="Birth Date"
            value={moment(birthDate).format("DD/MM/YYYY")}
          />
          <Biography label="Occupation" value={occupation} lastChild />
        </View>
      </RegisterLayout>
    );
  }
}

export default RegisterAccountSummary;
