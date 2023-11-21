
import React, { useState ,useEffect} from "react";
import { Avatar, Button, Center, HStack, Image, Pressable, Text, View, VStack } from "native-base";
import ava from "../../assets/photos/ava-1.png"
import ava1 from "../../assets/photos/(127).png"
import ava2 from "../../assets/photos/ava-2.png"
import ava3 from "../../assets/photos/ava-3.png"
import ava4 from "../../assets/photos/ava-4.png"
import ava5 from "../../assets/photos/ava-5.png"
import ava6 from "../../assets/photos/ava-6.png"
import quizTime from "../../assets/photos/quiz-logo.jpg"
import { ImageBackground } from "react-native";
import moment from "jalali-moment";
import { useNavigation } from "@react-navigation/core";


const CartHome = (props) => {
    const [data, setData] = useState(props.data);
    const [time, setTime] = useState();
    const {navigate}=useNavigation()

    return <Pressable w='full' mt="3" bg="indigo.600" style={{borderRadius:"5px"}} onPress={()=>navigate('Quiz' , {id:data.id})}>
        <HStack  justifyContent="space-between" w="full">
            <Center  style={{borderRadius:"0px 0px 5px 5px"}}>
                <Image source={{
                    uri: ava1
                }} alt="Alternate Text" size="sm" ></Image>
            </Center>
            <Center alignItems="center">
{/* <ImageBackground style={{width:"80%"}}
      source={quizTime}
                > */}
            
                    
    
                <Text color="#fff" fontSize="16px" fontWeight="600">
                    مسابقه {data.type}
                </Text>
                
                <Avatar.Group mt="3" _avatar={{
                    size: "xs",
                marginX:2
                }} max={5}>
                    {/* {  data.avatars.map((e, i) => {
           return <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: e
             }} />
               })                 
                    } */}
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava1
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava2
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava3
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava4
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava5
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava6
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava4
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava5
                    }} />
                    <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: ava6
                    }} />
                    

                </Avatar.Group>
                {/* </ImageBackground> */}
            </Center >
            <Center pr="2" pl="2" style={{borderLeft:"5px solid #fff"}} br="100"  >
               <Text color={"#fff"}>{moment(data.startTime).locale('fa').format('hh:mm')}</Text> 
            </Center>
        </HStack>
    </Pressable>


};

export default CartHome;

