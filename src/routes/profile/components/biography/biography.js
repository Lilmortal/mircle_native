import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import TextInput from "../../../../components/textInput";
import { NUM_OF_COLUMNS } from "../../constants";
import styles from "./styles";

const windowWidth = Dimensions.get("window").width;

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
      validate,
      disabled,
      style
    } = this.props;

    const selectedStyle = this.state.isSelected
      ? { backgroundColor: "red" }
      : {};

    const Display = () =>
      <Text style={styles.value}>
        {value}
      </Text>;

    const ValueInput = () => <InputComponent value={value} />;

    return (
      <TouchableOpacity onPress={!disabled && this.toggleIsSelected}>
        <View
          style={[
            styles.biography,
            { width: windowWidth / NUM_OF_COLUMNS },
            selectedStyle,
            disabled && { backgroundColor: "gray" },
            style
          ]}
        >
          {this.state.isSelected ? <ValueInput /> : <Display />}
          <Text style={styles.label}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Biography;
