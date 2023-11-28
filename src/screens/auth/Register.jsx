import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { Button, Column, Input } from "../../comps";
import { Image } from "native-base";
import axios from "axios";
import { setItemAsync } from "expo-secure-store";
import { Platform } from "react-native";
import { authContext } from "../../navigation/AppNavigator";

const Register = () => {
  const auth = useContext(authContext)
  const { params } = useRoute()
  const [timer, setTimer] = useState((120))
  const [code, setCode] = useState((""))
  const [userName, setUserName] = useState((""))
  const [pass1, setPass1] = useState((""))
  const [pass2, setPass2] = useState((""))
  const {navigate} = useNavigation()
  
  const sendCodeAgain = () => { 
    let data={phone:params.phone}
    axios.post('https://quiz.iran.liara.run/auth/send_code',data )
      .then(response => {
        if (response.data) {
         if (response.data.status == "register" )setTimer(120)
         
        } else {

        }
      })
      .catch(error => {
      });
  }


  useEffect(() => {
    if (!timer) return;
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);
 
  const create = () => {
    if (pass1 && pass2 && userName && code && pass1 == pass2) {
      let data = {
        phone: params.phone,
        code: code,
        username: userName,
        password:pass1
      }
      axios.post('https://quiz.iran.liara.run/auth/register',data )
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
    } else {
      
    }
    

  }


  return (
    <Container>
      <Column space={1} p={3}>
      <Image borderRadius={5} w="100%" minHeight={180}  color='primary'  mb={2} ml={2} mr={2} source={{
                uri: require('../../../assets/photos/logo2.png')
        }} alt="Alternate Text" />

        <Input
          borderColor={'#03955e'}
          borderRadius="15"
          onChangeText={(e) => setCode(e)}
          keyboardType="numeric"
          maxLength={5}
          label="کد پیامک شده را وارد کنید"
          placeholder=""
        />
        <Input
          borderColor={'#03955e'}
          borderRadius="15"
          onChangeText={(e) => setUserName(e)}
          label="نام کاربری خود را وارد کنید"
          placeholder=""
        />
        <Input
          borderColor={'#03955e'}
          borderRadius="15"
          onChangeText={(e) => setPass1(e)}
          label="رمز عبور"
          placeholder=""
          secureTextEntry
        />
        <Input
          borderColor={'#03955e'}
          borderRadius="15"
          onChangeText={(e) => setPass2(e)}
          label="تکرار رمز عبور"
          placeholder=""
          secureTextEntry
        />
        
        <Button onPress={() => create()} borderRadius={15}scheme="success" isLoading={false} title="ثبت نام" />

        <Button 
          borderRadius={15}
          isLoading={false}
          onPress={() => sendCodeAgain()}
          scheme="warning"
          isDisabled={timer > 0}
          title={timer > 0 ? `${timer} ثانیه صبر کنید` : "ارسال دوباره کد"}
        />
      </Column>
      {/* <BaseImage height={450} /> */}
    </Container>
  );
};

export default Register;
