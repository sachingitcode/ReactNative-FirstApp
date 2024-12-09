import React, { useState } from "react";
import { FlatList, StyleSheet, View , Text,Button, } from "react-native";

const Page1 = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);

  return (
    <View>
      <Text>Yuppp</Text>

      {isloggedIn ? (
        <Button title="Logout" onPress={() => setIsloggedIn(false)} />
      ) : (
        <Button title="Login" onPress={() => setIsloggedIn(true)} />
      )}
    </View>
  );
};


const logIn =() =>{
    return {}

}

export default Page1;
