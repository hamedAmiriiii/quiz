import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import theme from "./src/utils/theme/base";
import AppNavigator from "./src/navigation/AppNavigator";


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [fontLoaded] = useFonts({
    'IranSans': require('./assets/fonts/Yekan.ttf'),
  });


  return fontLoaded && (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
