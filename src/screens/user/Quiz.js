import React, { useState, useEffect } from "react";
import { View, VStack, Center, Button, Text } from "native-base";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
import moment from "jalali-moment";
import pallete from "../../utils/theme/pallete";

const Quiz = () => {
  const { params } = useRoute()
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState(0);

  const startGame = () => {
    let data = {
      playerId: 1,
      gameId:1
}
    axios.post('https://quiz.iran.liara.run/game/answer' , data)
      .then(response => {
        console.log("ttttt6", response.data)
       
      })
      .catch(error => {
        // console.error('Error fetching data: ', error);
      });
    
  }



  useEffect(() => {
    axios.get('https://quiz.iran.liara.run/game/get_game/' + params.id)
      .then(response => {
        console.log("ttttt6", response.data)
        console.log("ttttt7", moment().unix())
        // let timer = 1700573386 //del
        console.log("ttttt98", timer)
        setData(response.data);
        // setTimer(timer) //del


        if (response.data.status != "before") {
          let timer = response.data.startTime
          setTimer(timer)
        }
        if (response.data.status != "start") {
          startGame()
        }
      })
      .catch(error => {
        // console.error('Error fetching data: ', error);
      });
  }, []);




  return <VStack alignItems="center">
    <Center w="100%" h="250" bg="secondary" rounded="md" shadow={22}>
      <Text fontSize={20} color='#6cc4f0' marginBottom={10} > تا شروع مسابقه</Text>
      {timer && <CountdownTimer start={timer} startGame={startGame} />}
    </Center>
    <Center w="100%" h="50" bg="indigo.500" rounded="md" shadow={22} >
    </Center>
  </VStack>




};

export default Quiz;
