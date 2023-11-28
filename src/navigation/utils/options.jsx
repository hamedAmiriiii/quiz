import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { Icon, useTheme } from "native-base";
import { StatusBar } from "react-native";


export const bottomTabOptions = ({ route }) => {
  const theme = useTheme();

  return {
    headerShown: false,

    tabBarStyle: {
      backgroundColor: theme.colors.primary,
      borderTopWidth: 0.5,
      borderTopColor: theme.colors.black[200],
      shadowColor: "transparent",
      height: 60,
    },
    tabBarShowLabel: false,
    tabBarIcon: ({ focused }) => {
      let iconName = "home";

      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      
      } else if (route.name === "Profile") {
        iconName = focused ? "person" : "person-outline";
      
      }
      return (
        <Icon
          as={Ionicons}
          name={iconName}
          size={focused ? "lg" : "md"}
          color={focused ? "text.secondary" : "text.muted"}
        />
      );
    },
  };
};

