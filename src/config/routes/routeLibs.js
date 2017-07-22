import { StackNavigator } from "react-navigation";

export const withStack = navOptions => obj => {
  return StackNavigator(obj, navOptions);
};

export const withLayout = Layout => Container =>
  <Layout>
    {Container}
  </Layout>;
