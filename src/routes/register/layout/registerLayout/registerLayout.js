import React, { Component } from "react";
import { View, Text } from "react-native";

import Spinner from "@jacktan/mircle_native_components/spinner";
import Button from "@jacktan/mircle_native_components/button";
import { TitleText, ButtonText } from "@jacktan/mircle_native_components/text";
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
          <TitleText>{title}</TitleText>
        </View>
        <View style={[styles.registerChildren, style]}>{children}</View>
        <Button
          onPress={async () => {
            this.setLoading(true);
            await onPress();
            this.setLoading(false);
          }}
          style={styles.submitButton}
        >
          <ButtonText color="white" bold>
            {buttonMessage}
          </ButtonText>
        </Button>
      </View>
    );
  }
}

export default RegisterLayout;
