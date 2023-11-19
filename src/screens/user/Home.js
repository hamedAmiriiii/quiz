import React, { useEffect, useState } from "react";
import { View } from "native-base";
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

  return <Container style={{ alineItem: "center" }}>
    { data &&
      data.map((e, index) => {
        if (index < 10) return <CartHome
         data={e}
    />
      })
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