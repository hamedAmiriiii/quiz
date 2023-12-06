import { Avatar, HStack, Icon, InfoIcon, Text, VStack, View } from 'native-base'
import React from 'react'
import pallete from '../utils/theme/pallete'
import { Linking, Pressable } from 'react-native'
import { api } from '../api'
import useUser from '../hooks/useUser'



export default function Header() {


    const user = useUser()

    const buy = () => {
        api({ method:"post",
            url: 'deposit', data: {
                amount: 1000,
                userId:user._id
        } }).then(res => {
            console.log("rrrrrrrrr", res);
            Linking.openURL(res.data.url)
          }).catch(err => console.log(err))
    }
  return (
   
          <HStack background={pallete.text} p={2} borderRadius={5} w='full' justifyContent='space-between'>
          <VStack space={2}>
              
              <Pressable onPress={buy}>
                <HStack space={2} alignItems='center'>
                  <InfoIcon color='yellow.500'  size='xs'      /> 
                  <Text fontSize={12} color='yellow.500'>25000</Text>
              </HStack>  
              </Pressable>
              
              <HStack space={2} alignItems='center'>
                  <InfoIcon  color='yellow.500'   size='xs'     />
                  <Text fontSize={12} color='yellow.500'>36</Text>
              </HStack>
          

          </VStack>
          <HStack alignItems='center' space={2}>
              <VStack>
                  
              <Text color='black' fontSize={12}>Shalud</Text>
              <Text color='gray.600' fontSize={9}>سعیدی</Text>
              </VStack>
              <Avatar size='sm' />
          </HStack>
          </HStack>

    
  )
}
