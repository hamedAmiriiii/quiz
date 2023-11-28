import React, { useEffect, useState } from "react";
import { FlatList, View } from "native-base";
import CartHome from "../../components/CartHome";
import { StyleSheet } from "react-native";
import pallete from "../../utils/theme/pallete";
import Container from "../../components/Container";
import axios from "axios";
import Header from "../../components/Header";
import { api } from "../../api";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    api({ url: 'games' }).then(res => {
      setData(res.data);
    }).catch(err => console.log(err))
    
  }, []);

  return <Container>
    <Header/>
    {data &&
      
      <FlatList style={{width: '100%'}} showsVerticalScrollIndicator={false} data={data.slice(0 , 20)} renderItem={({item}) => <CartHome data={item} />} />
 
    }


  </Container>
    
    

};

export default Home;


const styles = StyleSheet.create({
  home: {
    backgroundColor: pallete.backgrounHome,

    // backgroundColor: "#80b0fe"
  }
})