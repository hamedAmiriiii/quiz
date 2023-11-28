
import React, { useState ,useEffect} from "react";
import { AlertDialog, Avatar, Button, Center, HStack, Image, Pressable, Text, View, VStack } from "native-base";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import moment from "jalali-moment";
import { useNavigation } from "@react-navigation/core";
import pallete from "../utils/theme/pallete";
import useUser from "../hooks/useUser";
import price from "../hooks/price";
import { api } from "../api";



const CartHome = (props) => {
    const [data, setData] = useState(props.data);
    const [time, setTime] = useState();
    const { navigate } = useNavigation()
    const user = useUser()
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);
    const findUserInGame = data?.players?.find((e) => e.user._id == user._id)
    const onpresss = () => {
        
        if (findUserInGame) {
            navigate('Quiz' , {id:data._id})
        } else {
            setIsOpen(!isOpen)
        }
    }
    const success = () => {
        
        api({method:"post" ,url: 'game/register_game',data:{userId:user._id ,gameId:data._id}, }).then(res => {
            // setData(res.data);
            console.log("rrrrrr", res);
        }).catch(err => console.log(err))
        // onClose()


         }


   return <Pressable overflow="hidden" w='full'  p={1} justifyContent="center" mt={3} bg="primary" borderRadius={5} onPress={()=> onpresss()}>
        <HStack  justifyContent="space-between" w="full">
         <Center borderRightColor={5}  >
            {
               props.data.startTime - moment().unix() < 600 ? 
               <CountdownCircleTimer
               isPlaying
               strokeWidth= {4}
                      duration={props.data.startTime - moment().unix()}
                      colors={[ pallete.danger]}
                 colorsTime={[600 ]}
               size={70}
           
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
                    {  data.players.map((e, i) => {
           return <Avatar style={{ border: "unset" }} bg="green.505" source={{
                 uri: e.user.avatar.url
             }} />
               })                 
                    }
                </Avatar.Group>
            </VStack >
            <Center pr="2" pl="2"  bg={data.startTime < moment().unix() ? pallete.success : pallete.primary} borderLeftColor={pallete.secondary} borderLeftWidth={2} >
               <Text color={"#fff"}>{moment.unix(data.startTime).format('hh:mm')}</Text> 
            </Center>
       </HStack>
       
       <AlertDialog leastDestructiveRef={cancelRef}  isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content backgroundColor={pallete.text}>
          {/* <AlertDialog.CloseButton /> */}
               <AlertDialog.Header backgroundColor={pallete.text} alignItems="center" textAlign="center" >
                   <HStack space={3}>
               <Avatar size='xs'  source={{
                   uri: data.image
                }} alt="Alternate Text" />
                <Text fontSize={17} fontWeight='600'>ثبت نام در مسابقه</Text>
                </HStack>
                   
               </AlertDialog.Header>
          <AlertDialog.Body backgroundColor={pallete.text} alignItems="end">
                   <HStack>
                       <Text fontSize={17} > {price(data.type) } سکه</Text>
                       <Text fontSize={17}>ورودی مسابقه : </Text>
                    </HStack>
                   <HStack>
                       <Text fontSize={17}>{ data.players.length} نفر</Text>
                       <Text fontSize={17}>شرکت کنندگان تا این لحظه : </Text>
                    </HStack>
                   <HStack>
                       <Text fontWeight='600' color={pallete.danger} fontSize={17}>{price(Math.round((data.players.length* data.type) * 0.7))  } سکه </Text>
                       <Text fontWeight='600' fontSize={17}>جایزه نفر اول  : </Text>
                    </HStack>
          </AlertDialog.Body>
          <AlertDialog.Footer backgroundColor={pallete.text}>
            <Button.Group space={2}>
              <Button variant="unstyled" w="50" backgroundColor= {pallete.warning } onPress={onClose} ref={cancelRef} >
                انصراف
              </Button>
              <Button  w="50" backgroundColor={pallete.success} onPress={success}>
                تایید
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
       </AlertDialog>
       

    </Pressable>


};

export default CartHome;

