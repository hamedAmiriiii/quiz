import { Image ,  Text } from "native-base";
import Container from "../../components/Container";
import { Button, Column, Input } from "../../comps";
import { useState } from "react";
import pallete from "../../utils/theme/pallete";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

const Phone = () => {
  const {navigate}=useNavigation()
  const [phone , setPhone] = useState("09") 
  const [checkMobileNumber , setCheckMobileNumber] = useState("09") 
  
  const handleSendCode = () => {
    if (mobileNumber()) {
      let data={phone}
      axios.post('https://quiz.iran.liara.run/auth/send_code',data )
      .then(response => {
        if (response.data) {
         if (response.data.status == "register" ) {
          navigate('Register' , {phone})
          }navigate('Login' , {phone})
          
        } else {
        }
      })
      .catch(error => {
      });

  }
  }
  
 const mobileNumber =()=> {
    let num = phone
    if (phone.length === 11 && phone.substring(0, 2) === "09") {
      setCheckMobileNumber(true)
      return true
    } else {
      setCheckMobileNumber(false)
     return false
    }
  }

  return (
    <Container bodyPadded={false} pt={4}>
      <Column space={3} p={3}>
      <Image borderRadius={5} w="100%" minHeight={180}  color='primary'  mb={10} ml={2} mr={2} source={{
                uri: require('../../../assets/photos/logo2.png')
        }} alt="Alternate Text" />
        <Input
          borderColor={'#03955e'}
          borderRadius="15"
          label="شماره موبایل خود را وارد نمایید"
          onChangeText={(e) =>  setPhone(e) }
          keyboardType="numeric"
          maxLength={11}
          placeholder="091"
          icon="call-outline"
        />
       {!checkMobileNumber &&  <Text fontSize={11} color={pallete.danger}> لطفا شماره موبایل به صورت صحیح وارد شود</Text>}
        <Button borderRadius={15} scheme="success" onPress={handleSendCode} title="مرحله بعد"
          isLoading={false}
        />
      </Column>
    </Container>
  );
};

export default Phone;
