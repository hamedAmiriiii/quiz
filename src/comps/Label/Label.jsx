import { Center, Text } from "native-base";
import React from "react";


const Label = ({ type, title, ...rest }) => {
  return (
    <Center background={`${type}`} px={4} py={1} {...rest}>
      <Text>{title}</Text>
    </Center>
  );
};

export default Label;
