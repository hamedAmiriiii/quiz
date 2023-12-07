import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  bottomTabOptions } from "./utils/options";
import Home from "../screens/user/Home";
import Quiz from "../screens/user/Quiz";
import Buy from "../screens/user/Buy";


const Profile = () => {
  return <></>
}
const MainStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={bottomTabOptions}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};


const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Main" component={BottomTabStack} />
      <MainStack.Screen name="Quiz" component={Quiz} />
      <MainStack.Screen name="Buy" component={Buy} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
