import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider>
      <ToDoScreen />
    </PaperProvider>
  );
};

export default App;
