import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import HomePage from "./project/HomePage";
import WelcomeScreens from "./project/screens/WelcomeScreens";
import Lists from "./project/Pages/Lists";
import Page1 from "./learn_native/Page1";
import StartTodo from "./project/Pages/ToDoApp/StartTodo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartTodo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// TS (.ts): Stands for TypeScript. This is used for files containing only TypeScript code, which means no JSX or UI-related syntax is included.
// TSX (.tsx): Stands for TypeScript with JSX. This is used when your TypeScript file includes JSX (JavaScript XML) syntax, which is common in React applications.
// JSX (.jsx): Stands for JavaScript with JSX .
