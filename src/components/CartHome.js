
import React, { useState ,useEffect} from "react";
import { Avatar, Button, Center, HStack, Image, Pressable, Text, View, VStack } from "native-base";
import ava from "../../assets/photos/ava-1.png"
import ava1 from "../../assets/photos/(127).png"
import quizTime from "../../assets/photos/quiz-logo.jpg"
import { ImageBackground } from "react-native";
import moment from "jalali-moment";




const CartHome = (props) => {
    const [data, setData] = useState(props.data);
    const [time, setTime] = useState();
    // const [avatarlist, setAvatarlist] = useState({});

   


    return <Pressable w='full' mt="3" bg="#005b9d" style={{borderRadius:"5px"}}>
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
                    size: "sm"
                }} max={4}>
                    {  data.avatars.map((e, i) => {
           return <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: e
             }}>
                 
             </Avatar> 
             
         })
                        
}

{/*                    
                    <Avatar style={{ border: "unset" }} bg="cyan.500" source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                        TE
                    </Avatar>
                    <Avatar style={{ border: "unset" }} bg="indigo.500" source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        JB
                    </Avatar>
                    <Avatar style={{ border: "unset" }} bg="amber.500" source={{
                        uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                        TS
                    </Avatar>
                    <Avatar style={{ border: "unset" }} bg="green.500" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        AJ
                    </Avatar>
                    <Avatar style={{ border: "unset" }} bg="cyan.500" source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                        TE
                    </Avatar>
                    <Avatar style={{ border: "unset" }} bg="indigo.500" source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        JB
                    </Avatar>
                    <Avatar style={{ border: "unset" }} bg="amber.500" source={{
                        uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}>
                        TS
                    </Avatar> */}
                </Avatar.Group>
                {/* </ImageBackground> */}
            </Center >
            <Center pr="2" pl="2" style={{borderLeft:"5px solid #fff"}} br="100"  >
               <Text color={"#fff"}>{moment(data.startTime).locale('fa').format('hh:mm')}</Text> 
            </Center>
        </HStack>
        {/* <VStack>

            <Center>



            </Center>
        </VStack> */}




    </Pressable>


};

export default CartHome;

