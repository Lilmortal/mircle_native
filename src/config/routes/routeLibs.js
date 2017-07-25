import React from "react";
import { StackNavigator } from "react-navigation";

export const withOptions = screen => navigationOptions => {
  return {
    screen,
    navigationOptions
  };
};

export const withLayout = Layout => Container =>
  <Layout>
    {Container}
  </Layout>;
