import { useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import Container from "../../components/Container";
import { Button, Column, Input } from "../../comps";
import { Image } from "native-base";
import axios from "axios";
import { authContext } from "../../navigation/AppNavigator";
import { Platform } from "react-native";


const Login = () => {
  const { params } = useRoute();
  const [timer ,setTimer] = useState(0)
  const [password, setPassword] = useState(0)
  const auth = useContext(authContext)
 
  const handleLogin = () => {
    let data = {
      phone: params.phone,
      password
    }
    axios.post('https://quiz.iran.liara.run/auth/login',data , {
      
    })
      .then(async response => {
        if (response.data) {
          
          Platform.OS === 'web' ?
            localStorage.setItem('auth', JSON.stringify(response.data)) :
            await setItemAsync('auth', JSON.stringify(response.data));
          
            auth.setAuth(response.data)
          
         
        } else {

        }
      })
      .catch(error => {
      });
  }

  return (
    <Container bodyPadded={false} pt={4}>
      <Column space={3} p={3}>
      <Image borderRadius={5} w="100%" minHeight={180}  color='primary'  mb={2} ml={2} mr={2} source={{
                uri: require('../../../assets/photos/logo2.png')
        }} alt="Alternate Text" />


          <Input
            onChangeText={(text) => setPassword(text)}
            placeholder="*******"
            label="کلمه عبور را وارد کنید"
            secureTextEntry
          />
    
        <Button isLoading={false} onPress={handleLogin} scheme="success" title="ورود" />
      
      </Column>
    </Container>
  );
};

export default Login;
