import React from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import { mapGenderValueToLabel } from "../../../libs";
import Picker from "../../../components/picker";
import DatePicker from "../../../components/datePicker";
import TextInput from "../../../components/textInput";
import { updateUser } from "../../../api";
import Profile from "../profile";
import { userState } from "../../../states";

const {
  UPDATE_GENDER,
  UPDATE_PHONE_NUMBER,
  UPDATE_BIRTH_DATE,
  UPDATE_OCCUPATION,
  UPDATE_PROFILE_IMAGE
} = userState.actions;

const {
  getEmailAddress,
  getFirstName,
  getSurname,
  getGender,
  getPhoneNumber,
  getBirthDate,
  getOccupation,
  getProfileImage,
  getCreatedOn,
  getLastLoggedIn
} = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    emailAddress: getEmailAddress,
    firstName: getFirstName,
    surname: getSurname,
    gender: getGender,
    phoneNumber: getPhoneNumber,
    birthDate: getBirthDate,
    occupation: getOccupation,
    profileImage: getProfileImage,
    createdOn: getCreatedOn,
    lastLoggedIn: getLastLoggedIn
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    emailAddress,
    gender,
    phoneNumber,
    birthDate,
    occupation,
    profileImage,
    createdOn,
    lastLoggedIn
  } = stateProps;
  const { dispatch } = dispatchProps;

  const data = [
    {
      id: 1,
      label: "Gender",
      value: mapGenderValueToLabel(gender),
      InputComponent: () =>
        <Picker
          selectedValue={gender}
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
          onValueChange={async value => {
            try {
              await updateUser(emailAddress, "gender", value);
              dispatch(UPDATE_GENDER(value));
            } catch (err) {
              Alert.alert("There is an error updating gender.", err);
            }
          }}
        />
    },
    {
      id: 2,
      label: "Phone Number",
      value: phoneNumber,
      InputComponent: () =>
        <TextInput
          onEndEditing={async value => {
            const text = value.nativeEvent.text;
            try {
              await updateUser(emailAddress, "phoneNumber", text);
              dispatch(UPDATE_PHONE_NUMBER(text));
            } catch (err) {
              Alert.alert("There is an error updating phone number.", err);
            }
          }}
          keyboardType={"phone-pad"}
          defaultValue={phoneNumber}
        />
    },
    {
      id: 3,
      label: "Birth Date",
      value: birthDate.toLocaleString(),
      InputComponent: () =>
        <DatePicker
          value={birthDate}
          onDateChange={async value => {
            try {
              await updateUser(emailAddress, "birthDate", value);
              dispatch(UPDATE_BIRTH_DATE(moment(value, "DD/MM/YYYY").toDate()));
            } catch (err) {
              Alert.alert("There is an error updating birth date.", err);
            }
          }}
        />
    },
    {
      id: 4,
      label: "Occupation",
      value: occupation,
      InputComponent: () =>
        <TextInput
          onEndEditing={async value => {
            const text = value.nativeEvent.text;
            try {
              await updateUser(emailAddress, "occupation", text);
              dispatch(UPDATE_OCCUPATION(text));
            } catch (err) {
              Alert.alert("There is an error updating occupation.", err);
            }
          }}
          defaultValue={occupation}
        />
    },
    {
      id: 5,
      label: "Created On",
      value: createdOn.toLocaleString(),
      InputComponent: () => <TextInput />,
      disabled: true
    },
    {
      id: 6,
      label: "Last Logged In",
      value: lastLoggedIn.toLocaleString(),
      InputComponent: () => <TextInput />,
      disabled: true
    }
  ];

  return {
    ...ownProps,
    ...stateProps,
    data
  };
};

export default connect(mapStateToProps, null, mergeProps)(Profile);
