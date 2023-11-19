import React from "react";
import { Button, Text, View } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/core";

const Register = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  return (
    <View>
      <Button borderRadius={50} isLoading={true} onPress={goBack} bg="blue.600">
        Go back
      </Button>
      <Text color="blueGray.300">{params.phone}</Text>
    </View>
  );
};

export default Register;
