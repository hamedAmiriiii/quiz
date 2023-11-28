import { useTheme } from "native-base";
import React from "react";
// import { Image as CacheImage } from "react-native-expo-image-cache";
import { Image as ExpoImage } from "expo-image";


const Image= ({ uri, radius = 0, border = false, size = 200 }) => {
  const theme = useTheme();

  return (
    <ExpoImage
      style={{
        width: size ,
        height: size ,
        marginHorizontal: 5,
        borderRadius: radius,
        borderColor: border ? theme.colors.blueGray[500] : "transparent",
        borderWidth: border ? 1 : 0,
      }}
      source={{ uri }}
    />
  );
};

export default Image;
