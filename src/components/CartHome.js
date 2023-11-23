
import React, { useState ,useEffect} from "react";
import { Avatar, Button, Center, HStack, Image, Pressable, Text, View, VStack } from "native-base";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import moment from "jalali-moment";
import { useNavigation } from "@react-navigation/core";
import pallete from "../utils/theme/pallete";


const CartHome = (props) => {
    const [data, setData] = useState(props.data);
    const [time, setTime] = useState();
    const {navigate}=useNavigation()
console.log("ttttttt", props.data.startTime - moment().unix());
   return <Pressable overflow="hidden" w='full'  p={1} justifyContent="center" mt={3} bg="primary" borderRadius={5} onPress={()=>navigate('Quiz' , {id:data.id})}>
        <HStack  justifyContent="space-between" w="full">
         <Center borderRightColor={5}  >
            {
               props.data.startTime - moment().unix() < 600 ? 
               <CountdownCircleTimer
               isPlaying
          // isGrowing
               strokeWidth= {4}
                      duration={props.data.startTime - moment().unix()}
                      colors={[ pallete.danger]}
                 colorsTime={[600 ]}
               size={70}
             //   onComplete={(totalElapsedTime) => ({
             //     shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
             //   })}
             >
                      {({ elapsedTime, color }) => (
                        
                <Avatar source={{
                   uri: data.image
               }} alt="Alternate Text"  size="lg" />
               )}
                  </CountdownCircleTimer>
                  :
                  <Avatar size='lg'  source={{
                     uri: data.image
                 }} alt="Alternate Text"   />
            }
         
            

                
            </Center>
            <VStack  justifyContent="space-between"  paddingY={2} alignItems="center">

            
                    
    
                <Text color="#fff" fontSize="16px" fontWeight="600">
                    مسابقه {data.type}
                </Text>
                
                <Avatar.Group mt="3" _avatar={{
                    size: "xs",
                marginX:2
                }} max={5}>
                    {  data.avatars.map((e, i) => {
           return <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: e
             }} />
               })                 
                    }
                 
                    

                </Avatar.Group>
                {/* </ImageBackground> */}
            </VStack >
            <Center pr="2" pl="2"  bg={data.startTime < moment().unix() ? pallete.success : pallete.primary} borderLeftColor={pallete.secondary} borderLeftWidth={2} >
               <Text color={"#fff"}>{moment.unix(data.startTime).format('hh:mm')}</Text> 
            </Center>
        </HStack>
    </Pressable>


};

export default CartHome;

