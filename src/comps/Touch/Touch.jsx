import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";


const Touch = ({ children, ...rest }) => {
  return (
    <TouchableOpacity style={{ padding: 5 }} activeOpacity={0.8} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Touch;
