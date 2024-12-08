import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Text,
  Checkbox,
  Button,
  IconButton,
  Card,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskList from "./TaskList";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const ToDoScreen = () => {
  // Current working Task
  const [taskInput, setTaskInput] = useState("");

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [visible, setVisible] = useState(false);

  // Run on the starting of App
  useEffect(() => {
    loadTasks();
  }, []); //  //Runs only on the first render as dependency passed

  /* To Get and Store data in  AsyncStorage DB */
  const [tasks, setTasks] = useState<Task[]>([]);
  const loadTasks = async () => {
    const savedTasks = await AsyncStorage.getItem("@tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // if u get null notassignable , first check if it null or not , via above if condition
    }
  };
  const saveTasks = async (newTasks: Task[]) => {
    await AsyncStorage.setItem("@tasks", JSON.stringify(newTasks));
  };

  const addTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskInput,
      completed: false,
    };
    if (taskInput) {
      saveTasks([...tasks, newTask]);
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  /* **** */
  /* Delete  a Task */
  const deleteTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    saveTasks(filteredTasks);
  };

  /* Edit a Task */
  const editTask = (task: Task) => {
    
  };
  /* Save Edit Task */
  /* Toggle task completion */
  /* **** */

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}> To-Do List</Text>
        <TextInput
          placeholder="Enter Task"
          style={styles.input}
          value={taskInput}
          onChangeText={setTaskInput}
        />

        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onEdit={editTask}
          onToggleCompletion={toggleCompletion}
        />
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    marginVertical: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  editButton: {
    marginLeft: 10,
  },
  deleteButton: {
    marginLeft: 5,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
});

export default ToDoScreen;
