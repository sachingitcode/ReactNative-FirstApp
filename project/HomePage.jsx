import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import DynamicHeader from "./Pages/Header";

const HomePage = () => {
  const [title, setTitle] = useState("Home");

  return (
    <View style={styles.container}>
      <DynamicHeader
        title={title}
        backgroundColor="#4CAF50"
        textColor="#FFF"
        showBackButton={title !== "Home"}
        onBackPress={() => setTitle("Home")}
      />
      <View style={styles.content}>
        <Button title="Go to About" onPress={() => setTitle("About")} />
        <Button title="Go to Profile" onPress={() => setTitle("Profile")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
});
export default HomePage;
