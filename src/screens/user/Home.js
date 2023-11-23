import React, { useEffect, useState } from "react";
import { FlatList, View } from "native-base";
import CartHome from "../../components/CartHome";
import { StyleSheet } from "react-native";
import pallete from "../../utils/theme/pallete";
import Container from "../../components/Container";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://quiz.iran.liara.run/tour/get_tours')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return <Container>
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