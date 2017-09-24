import React, { Component } from "react";
import moment from "moment";

import TextInput from "@jacktan/mircle_native_components/textInput";
import Picker from "@jacktan/mircle_native_components/picker";
import DatePicker from "@jacktan/mircle_native_components/datePicker";
import RegisterLayout from "../../layout/registerLayout";
import validate from "../../../../libs/validate";

class RegisterAdditionalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValid: false,
      firstNameErrorMessage: "",
      surnameValid: false,
      surnameErrorMessage: ""
    };
  }

  validateForm = () => {
    const firstNameValidation = validate(
      this.props.firstName,
      undefined,
      "first name"
    );
    const surnameValidation = validate(
      this.props.surname,
      undefined,
      "surname"
    );

    this.setState({
      firstNameValid: firstNameValidation.isValid,
      firstNameErrorMessage: firstNameValidation.errorMessage
    });
    this.setState({
      surnameValid: surnameValidation.isValid,
      surnameErrorMessage: surnameValidation.errorMessage
    });

    return firstNameValidation.isValid && surnameValidation.isValid;
  };

  render() {
    const {
      goToNextPage,
      firstName,
      surname,
      birthDate,
      gender,
      phoneNumber,
      occupation,
      registerFirstName,
      registerSurname,
      registerGender,
      registerBirthDate,
      registerPhoneNumber,
      registerOccupation,
      registerProfileImage
    } = this.props;

    return (
      <RegisterLayout
        title="We like to know more about you..."
        onPress={() => goToNextPage(this.validateForm())}
      >
        <TextInput
          placeholder="First Name"
          onChangeText={firstName => registerFirstName(firstName)}
          onEndEditing={e => {
            const validation = validate(
              e.nativeEvent.text,
              undefined,
              "first name"
            );
            this.setState({
              firstNameValid: validation.isValid,
              firstNameErrorMessage: validation.errorMessage
            });
          }}
          value={firstName}
          error={this.state.firstNameErrorMessage}
          compulsory
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={surname => registerSurname(surname)}
          onEndEditing={e => {
            const validation = validate(
              e.nativeEvent.text,
              undefined,
              "surname"
            );
            this.setState({
              surnameValid: validation.isValid,
              surnameErrorMessage: validation.errorMessage
            });
          }}
          value={surname}
          error={this.state.surnameErrorMessage}
          compulsory
        />
        <Picker
          selectedValue={gender}
          onValueChange={gender => registerGender(gender)}
          items={[
            {
              label: "Male",
              value: "M"
            },
            {
              label: "Female",
              value: "F"
            },
            {
              label: "Unapplicable",
              value: "U"
            }
          ]}
        />

        <DatePicker
          title="Birth Date"
          value={birthDate}
          onDateChange={date =>
            registerBirthDate(moment(date, "DD/MM/YYYY").toDate())}
        />

        <TextInput
          placeholder="Phone Number"
          onChangeText={phoneNumber => registerPhoneNumber(phoneNumber)}
          keyboardType={"phone-pad"}
          value={phoneNumber}
        />
        <TextInput
          placeholder="Occupation"
          onChangeText={occupation => registerOccupation(occupation)}
          value={occupation}
        />
      </RegisterLayout>
    );
  }
}

export default RegisterAdditionalDetails;
