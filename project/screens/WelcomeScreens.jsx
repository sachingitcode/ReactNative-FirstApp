import React from "react";

import { ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreens() {
  return (
    <ImageBackground
      style={styles.backgroud}
      source={require("../../assets/ss1.png")}
    >
      <View>
        <Text>Helloooo</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
  },
});

export default WelcomeScreens;
