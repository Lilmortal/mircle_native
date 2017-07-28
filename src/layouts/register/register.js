import React from "react";

import BackgroundImage from "../../components/backgroundImage";
import { images } from "../../config";

const RegisterLayout = ({ children }) =>
  <BackgroundImage source={images.register1}>
    {children}
  </BackgroundImage>;

export default RegisterLayout;
