import React, { createContext, useEffect, useState } from "react";
import ClientNavigator from "./UserNavigator";
import GuestNavigator from "./GuestNavigator";
import { Link } from "native-base";
import UserNavigator from "./UserNavigator";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import { Platform } from "react-native";




export const authContext = createContext()


const AppNavigator = () => {

  const [auth, setAuth] = useState()

  
  
  useEffect(async () => {
    const data = Platform.OS === 'web' ?
            localStorage.getItem('auth') :
      await getItemAsync('auth');
    
    if (data) {
      setAuth(JSON.parse(data))
    }
  }, [])
  


  // getItemAsync('token').then(() => {
  //   setUser({})
  // })
  


  return (
    <authContext.Provider value={{auth , setAuth}}>
      {
       auth ? <UserNavigator/> : <GuestNavigator /> 
      }
    </authContext.Provider>

  ) 

};

export default AppNavigator;
