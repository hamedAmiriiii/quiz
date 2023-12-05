import React, { useEffect, useState } from "react";
import { Box, FlatList, View } from "native-base";
import CartHome from "../../components/CartHome";
import { Dimensions, StyleSheet } from "react-native";
import pallete from "../../utils/theme/pallete";
import Container from "../../components/Container";
import axios from "axios";
import Header from "../../components/Header";
import { api } from "../../api";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { topTab } from "./style/tab";

const AppTopTab = createMaterialTopTabNavigator();

const All = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    api({ url: 'games' }).then(res => {
      setData(res.data);
    }).catch(err => console.log(err))
    
  }, []);

  return data &&
      
      <FlatList style={{width: '100%'}} showsVerticalScrollIndicator={false} data={data.slice(0 , 50)} renderItem={({item}) => <CartHome data={item} />} />
 
   
    
    

};

const Mine = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    api({ url: 'games' }).then(res => {
      setData(res.data);
    }).catch(err => console.log(err))
    
  }, []);

  return data &&
      
      <FlatList style={{width: '100%'}} showsVerticalScrollIndicator={false} data={data.slice(0 , 50)} renderItem={({item}) => <CartHome data={item} />} />
 
    


 
    
    

};



const Home = () => {
 
  return (
    <View px={5} h='full'>
      <Header />
      
      
    
    <Box flex={1}>
      <AppTopTab.Navigator
        initialLayout={{ width: Dimensions.get("window").width }}
        initialRouteName="All"
        screenOptions={topTab}
      >
        <AppTopTab.Screen
          name="Mine"
          options={{ title: 'بازی های ثبت نامی' }}
          component={Mine}
        />
        <AppTopTab.Screen
          options={{ title:'کل بازی ها' }}
          name="All"
          component={All}
        />
      </AppTopTab.Navigator>

      </Box>
    </View>
      
  );
};





export default Home;


const styles = StyleSheet.create({
  home: {
    backgroundColor: pallete.backgrounHome,

    // backgroundColor: "#80b0fe"
  }
})