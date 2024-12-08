import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

interface Goal {
  id: string;
  value: string;
}

interface Props {
  goalObject: Goal;
  onDelete: () => void;
}

const GoalItem = ({ goalObject, onDelete }: Props) => {
  return (
    <View style={styles.listItem}>
      <Text> {goalObject.value}</Text>
      <Button title="Delete" onPress={onDelete} /> // Why we can not use func
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    alignContent: "space-around",
    borderBlockColor: "orange",
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    textAlign: "justify",
    fontFamily: "all",
    fontSize: 12,
  },
  button: { color: "red" },
});
