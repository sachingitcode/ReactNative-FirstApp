import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import ToDoScreen from "./ToDoScreen";

const StartTodo = () => {
  return (
    <PaperProvider>
      <ToDoScreen />
    </PaperProvider>
  );
};

export default StartTodo;
