import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import theme from "./src/utils/theme/base";
import AppNavigator from "./src/navigation/AppNavigator";


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FlashMessage from "react-native-flash-message";

export default function App() {

  const [fontLoaded] = useFonts({
    'Yekan': require('./assets/fonts/Yekan.ttf'),
  });


  return fontLoaded && (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <FlashMessage position="top" />
    </NativeBaseProvider>
  );
}
