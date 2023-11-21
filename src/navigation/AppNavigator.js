import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Phone from "../screens/auth/Phone";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import Home from "../screens/user/Home";
import Quiz from "../screens/user/Quiz";
import Setting from "../screens/user/Setting";

const GuestStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

// const GuestNavigator = () => {
//   return (
//     <GuestStack.Navigator screenOptions={{ headerShown: false }}>
//       <GuestStack.Screen name="Phone" component={Phone} />
//       <GuestStack.Screen name="Register" component={Register} />
//       <GuestStack.Screen name="Login" component={Login} />
//     </GuestStack.Navigator>
//   );
// };

const UserNavigator = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="Home" component={Home} />
      <UserStack.Screen name="Quiz" component={Quiz} />
      {/* <UserStack.Screen name="Setting" component={Setting} /> */}
    </UserStack.Navigator>
  );
};

const AppNavigator = () => {
  const loggedIn = true;

  return loggedIn ? <UserNavigator /> : <GuestNavigator />;
};

export default AppNavigator;
