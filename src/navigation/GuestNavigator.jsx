import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Phone from "../screens/auth/Phone";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";

const GuestStack = createNativeStackNavigator();

const GuestNavigator = () => {
  return (
    <GuestStack.Navigator screenOptions={{ headerShown: false }}>
      <GuestStack.Screen name="Phone" component={Phone} />
      <GuestStack.Screen name="Login" component={Login} />
      <GuestStack.Screen name="Register" component={Register} />
    </GuestStack.Navigator>
  );
};

export default GuestNavigator;
