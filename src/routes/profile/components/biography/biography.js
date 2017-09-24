import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

import { RegularText, SmallText } from "@jacktan/mircle_native_components/text";
import TextInput from "@jacktan/mircle_native_components/textInput";
import styles from "./styles";

class Biography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  toggleIsSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  render() {
    const {
      label,
      value,
      InputComponent,
      disabled,
      selectable = false,
      style
    } = this.props;

    const Value = () => (
      <RegularText style={styles.biographyText}>{value}</RegularText>
    );

    return (
      <TouchableOpacity
        onPress={() => !disabled && selectable && this.toggleIsSelected()}
      >
        <View
          style={[
            styles.biography,
            this.state.isSelected && { backgroundColor: "#778899" },
            disabled && { backgroundColor: "gray" },
            style
          ]}
        >
          {this.state.isSelected ? <InputComponent /> : <Value />}
          <SmallText style={styles.biographyText}>{label}</SmallText>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Biography;
