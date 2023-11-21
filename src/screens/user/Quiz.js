import React, { useState ,useEffect} from "react";
import { View,VStack,Center, Button } from "native-base";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
import moment from "jalali-moment";
const Quiz = () => {
  const {params} = useRoute()
  const [data, setData] = useState(null);
  
  const startGame = () => {
   console.log("starttttttttttt");
 }
  useEffect (() => {
    axios.get('https://quiz.iran.liara.run/game/get_game/'+params.id )
      .then(response => {
        console.log( "ttttt6",response.data)
        console.log("ttttt7", moment().unix())
        let timer = response.data.startTime - moment().unix()
        console.log( "ttttt98",timer)
        setData(response.data);

        if (response.data.status != "before") {
          let timer = response.data.startTime - moment().unix()
          
        }
      })
      .catch(error => {
        // console.error('Error fetching data: ', error);
      });
  }, []);

 


 return <VStack  alignItems="center">
      <Center w="100%" h="250" bg="indigo.300" rounded="md" shadow={22}>

     <CountdownTimer timer={500} startGame={ startGame} />
      </Center>
   <Center w="100%" h="50" bg="indigo.500" rounded="md" shadow={22} >
      </Center>
    </VStack>



  
};

export default Quiz;
