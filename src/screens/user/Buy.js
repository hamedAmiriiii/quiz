import { useNavigation } from '@react-navigation/core'
import { ArrowBackIcon, HStack, Heading, Text, VStack, View } from 'native-base'
import React from 'react'
import { Linking, Pressable } from 'react-native'
import Header from '../../components/Header'
import pallete from '../../utils/theme/pallete'
import { api } from '../../api'
import useUser from '../../hooks/useUser'


export default function Buy() {

    const { navigate } = useNavigation()
    const user = useUser()

    const buy = (emount) => {
        api({
            method: "post",
            url: 'deposit', data: {
                amount: emount,
                userId: user._id
            }
        }).then(res => {
            console.log("rrrrrrrrr", res);
            Linking.openURL(res.data.url)
        }).catch(err => console.log(err))
    }
    return (
        <View px={5} h='full'>
            <Header />
            <HStack justifyContent="space-between" alignItems="center" >
            <Pressable onPress={()=>navigate("Home")}> <ArrowBackIcon color={pallete.danger } /> </Pressable>
            <Text textAlign="center" pt={2} pr="40%" color={pallete.primary}>خرید سکه</Text>
            </HStack>
            {/* <VStack> </VStack> */}
            
            <VStack space={2}>
                <Pressable onPress={() => buy(1000)}> <HStack h={20} w="100%" justifyContent="center" alignItems="center" borderRadius={4} bg={pallete.info}> <Text textAlign="center"> 1000 سکه</Text></HStack></Pressable>
                <Pressable onPress={() => buy(10000)}><HStack h={20} alignItems="center" borderRadius={4} bg={pallete.info}> <Text textAlign="center"> 10000 سکه</Text></HStack></Pressable>
                <Pressable onPress={() => buy(50000)}><HStack h={20} alignItems="center" borderRadius={4} bg={pallete.info}> <Text textAlign="center" > 50000 سکه</Text></HStack></Pressable>
            </VStack>

        </View>

    )
}
