import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

// interface Props {
//   onAddGoal: (str: string) => void; // Str to define in TS
// }ll

const GoalInput = ({ onAddGoal }) => {
  //{ onAddGoal }: Props
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleOnPress = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  //text: string
  const handleOnChangeText = (text) => {
    setEnteredGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Coal"
        style={styles.textInput}
        onChangeText={handleOnChangeText}
        value={enteredGoal}
      />
      <Button title="Add Details" onPress={handleOnPress} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "80%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "black",
  },
  button: {
    textAlign: "auto",
    fontSize: 10,
  },
  input: {
    width: "80%",
    fontSize: 3,
    borderWidth: 1,
    color: "orange",
  },
});
