import React from "react";

import BackgroundImage from "../../components/backgroundImage";
import { images } from "../../config";

const RegisterLayout = ({ children }) =>
  <BackgroundImage source={images.register}>
    {children}
  </BackgroundImage>;

export default RegisterLayout;
