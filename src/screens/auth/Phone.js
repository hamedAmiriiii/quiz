import React, { useState } from "react";
import { Button, Input, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import Container from "../../components/Container";


const Phone = () => {
  const { navigate } = useNavigation();
  const [phone, setPhone] = useState("");

  function check() {}
  return (
    <Container >
      {/* <View alignItems={"end"}>

      <h6 textAlign={"end"}>ورود یا ثبت نام</h6> 
      </View>
      <View alignItems={"center"} border={0}>

        <Input style={styles.inputMobile}  border={"unset"} value={phone} onChangeText={(text) => setPhone(text)} />
        <Text  style={styles.textMobile} color={"#888"} position={"absolute"}>+98</Text>
      </View >
      <View alignItems={"center"}>
        <Button style={{ fontFamily: "iransans !important" }} bg="#bb5eb4"
        fontFamily={"iransans"}
        fontSiz={"16px"} mt='20px' borderRadius={"25px"} w="80%" textAlign={"center"}
        onPress={() => navigate("Register", { phone })}>
        ورود به سایت
        </Button>
      </View>
      <Text >dfdf</Text>
       */}
    </Container>
  );
};

export default Phone;


// const styles = StyleSheet.create({
//   inputMobile: {
//     color: "#484848",
//     fontWeight: "500",
//     backgroundColor: "transparent",
//     fontSize: "17px",
//     lineHeight: '24px',
//     height:' 44px',
//     borderRadius: '25px',
//     border:' 1px solid #bbb',
//     paddingLeft: '70px',
//   },
//   textMobile: {
//     direction: 'rtl',
//     position: 'absolute',
//     fontSize: '18px',
//     fontWeight: '500',
//     top: '9px',
//     left: '68px',
//     borderRight:'1px solid #bbb',
//     paddingRight: '15px',
//     height: '26px',
//     lineHeight: '29px',
//     color: '#888',
//   }
// })
