import React, { useState, useEffect } from "react";
import { View, VStack, Center, Button, Text, HStack, Box, Progress, Avatar, Image } from "native-base";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
import moment from "jalali-moment";
import pallete from "../../utils/theme/pallete";

const Quiz = () => {
  const { params } = useRoute()
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState(0);
  const [inGame, setInGame] = useState(0);
  const [finishGame, setFinishGame] = useState(0);
  const [qustion, setQustion] = useState(0);

  const startGame = (e) => {
    let data = {
      playerId: 1,
      gameId: 1
    }
if (e) {
  data.qId = qustion.id
    data.answer = e
}
    axios.post('https://quiz.iran.liara.run/game/answer', data)
      .then(response => {
        console.log("ttttt6", response.data)
        if (response.data) {
        setQustion(response.data)
        setTimer(0)
        setInGame(true)
        } else {
          setFinishGame(true)
        setInGame(false)
        }
      })
      .catch(error => {
        // console.error('Error fetching data: ', error);
      });

  }



  useEffect(() => {
    axios.get('https://quiz.iran.liara.run/game/get_game/' + params.id)
      .then(response => {
        setData(response.data);

        if (response.data.status != "before") {
          let timer = response.data.startTime
          setTimer(timer)
        }
        if (response.data.status != "start") {
          // startGame()
        }
      })
      .catch(error => {
        // console.error('Error fetching data: ', error);
      });
  }, []);




  return <VStack py={2} h='full' alignItems="center">
    {timer ?
      <Center w="100%"   bg="secondary" rounded="md" shadow={22}>
        <Text fontSize={20} color='#6cc4f0' marginBottom={10} > تا شروع مسابقه</Text>
        <CountdownTimer start={timer} startGame={startGame} />
      </Center>
      : inGame ?
        <HStack w='full' h='full' justifyContent='center' space={2}>
         <Center w="80%" bg="secondary" rounded="md" >
        {/* <Box w="100%" maxW="500">
        <Progress bg="coolGray.100" _filledTrack={{
        bg: "lime.500"
      }} value={75} mx="4" />
      </Box> */}
            
            <View borderRadius={5} w="92%" minHeight={150} p={2} color='primary'  bg={pallete.text} alignItems="center" ml={4} mr={4}>
              <Image borderRadius={5} w="70%" minHeight={85} p={2} color='primary' ml={4} mr={4}  source={{
                     uri: require('../../../assets/photos/quiz-logo.png')
              }} alt="Alternate Text" />
              
            <Text fontSize={15} borderRadius={5} w="90%" minHeight={85} p={2} color='primary' ml={4} mr={4} bg={pallete.text} marginBottom={2} >
              {qustion.body} </Text>
            </View>
          <VStack  w="90%" >
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2} color='primary' onPress={()=>startGame(2)} m={2} bg={pallete.info} marginBottom={1} > {qustion.option2}</Text>
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2} color='primary' onPress={()=>startGame(1)} m={2} bg={pallete.info} marginBottom={1} > {qustion.option1}</Text>
          
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2}  color='primary' onPress={()=>startGame(4)} m={2} bg={pallete.info} marginBottom={1} > {qustion.option4}</Text>
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2}  color='primary' onPress={()=>startGame(3)} m={2} bg={pallete.info} marginBottom={1} > {qustion.option3}</Text>
          </VStack>
          </Center>
          <VStack space={1} alignItems='center' h='full' borderWidth={1} borderRadius={5} p={4} width='10%'>
            <VStack>
           <Avatar size='sm' />
          <Text fontSize='xs'>asdsdf gdfas</Text>
            </VStack>
            <VStack>
           <Avatar size='sm' />
          <Text fontSize='xs'>asdas</Text>
            </VStack>
            <VStack>
           <Avatar size='sm' />
          <Text fontSize='xs'>asdas</Text>
            </VStack>
            <VStack>
           <Avatar size='sm' />
          <Text fontSize='xs'>asdas</Text>
            </VStack>
            <VStack>
           <Avatar size='sm' />
          <Text fontSize='xs'>asdas</Text>
            </VStack>
            <VStack>
           <Avatar size='sm' />
          <Text fontSize='xs'>asdas</Text>
            </VStack>
          </VStack>  
        </HStack>
        
        : finishGame ?
          <Center> ffff</Center>
        : <></>
    }


    {/* <Center w="100%" h="50" bg="indigo.500" rounded="md" shadow={22} >
    </Center> */}
  </VStack>




};

export default Quiz;
