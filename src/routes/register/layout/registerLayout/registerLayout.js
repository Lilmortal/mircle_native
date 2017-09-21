import React, { Component } from "react";
import { View, Text } from "react-native";

import Spinner from "../../../../components/spinner";
import Button from "../../../../components/button";
import styles from "./styles";

class RegisterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    const {
      onPress,
      title,
      lastPage = false,
      children,
      style,
      buttonMessage = "NEXT"
    } = this.props;

    return (
      <View style={styles.register}>
        <Spinner show={this.state.loading} />
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {title}
          </Text>
        </View>
        <View style={[styles.registerChildren, style]}>
          {children}
        </View>
        <Button
          onPress={async () => {
            this.setLoading(true);
            await onPress();
            this.setLoading(false);
          }}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>
            {buttonMessage}
          </Text>
        </Button>
      </View>
    );
  }
}

export default RegisterLayout;
