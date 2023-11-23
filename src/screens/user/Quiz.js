import React, { useState, useEffect } from "react";
import { View, VStack, Center, Button, Text, HStack, Box, Progress } from "native-base";
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




  return <VStack alignItems="center">
    {timer ?
      <Center w="100%" h="250" bg="secondary" rounded="md" shadow={22}>
        <Text fontSize={20} color='#6cc4f0' marginBottom={10} > تا شروع مسابقه</Text>
        <CountdownTimer start={timer} startGame={startGame} />
      </Center>
      : inGame ?
        <Center w="100%" h="250" bg="secondary" rounded="md" >
<Box w="100%" maxW="500">
        <Progress bg="coolGray.100" _filledTrack={{
        bg: "lime.500"
      }} value={75} mx="4" />
      </Box>
            <Text fontSize={15} borderRadius={5} w="90%" minHeight={85} p={2} color='primary'ml={4} mr={4} bg={pallete.text} marginBottom={2} >{qustion.body} </Text>
          <HStack  w="90%" >
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2} color='primary' onPress={()=>startGame(2)} m={4} bg={pallete.info} marginBottom={2} > {qustion.option2}</Text>
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2} color='primary' onPress={()=>startGame(1)} m={4} bg={pallete.info} marginBottom={2} > {qustion.option1}</Text>
          </HStack>
          <HStack w="90%">
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2}  color='primary' onPress={()=>startGame(4)} m={4} bg={pallete.info} marginBottom={2} > {qustion.option4}</Text>
            <Text fontSize={15} textAlign="center" borderRadius={5} w="90%" p={2}  color='primary' onPress={()=>startGame(3)} m={4} bg={pallete.info} marginBottom={2} > {qustion.option3}</Text>
          </HStack>
        </Center>
        : finishGame ?
          <Center> ffff</Center>
        : <></>
    }


    <Center w="100%" h="50" bg="indigo.500" rounded="md" shadow={22} >
    </Center>
  </VStack>




};

export default Quiz;
