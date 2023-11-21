import { View } from "native-base";
import React from "react";
import { Platform } from "react-native";
import pallete from "../utils/theme/pallete";

const Container = ({ children }) => {
  
  return (
    <View h="full"
      w={Platform.OS === 'web' ? "80%" : 'full'}
      m={Platform.OS === 'web' ? 'auto' : '0'}
      p={4} style={{ alignItems: "center" }} bg="secondary"
    >
      {children}
    </View>
  );
};

export default Container;
