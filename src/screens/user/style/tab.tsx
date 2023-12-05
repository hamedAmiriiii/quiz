import { StatusBar, useTheme } from "native-base";

export const topTab = () => {
    const theme = useTheme();
    return {
      tabBarStyle: {
        backgroundColor: theme.colors.info,
        shadowColor: "transparent",
        // paddingTop: StatusBar.currentHeight,
      },
      tabBarActiveTintColor: theme.colors.success,
      tabBarIndicatorStyle: {
        backgroundColor: theme.colors.success,
        height: 3,
      },
      tabBarInactiveTintColor: theme.colors.text,
      tabBarLabelStyle: {
        fontSize: 16,
        fontFamily: "Yekan",
      },
    };
  };