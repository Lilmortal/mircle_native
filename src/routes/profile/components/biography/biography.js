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
    const { label, value, style } = this.props;

    const selectedStyle = this.state.isSelected
      ? { backgroundColor: "red" }
      : {};

    const Display = () =>
      <View>
        <Text style={styles.value}>
          {value}
        </Text>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>;

    const ValueInput = () =>
      <View>
        <TextInput value={value} />
      </View>;

    return (
      <TouchableOpacity onPress={this.toggleIsSelected}>
        <View
          style={[
            styles.biography,
            { width: windowWidth / NUM_OF_COLUMNS },
            selectedStyle,
            style
          ]}
        >
          {this.state.isSelected ? <ValueInput /> : <Display />}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Biography;
