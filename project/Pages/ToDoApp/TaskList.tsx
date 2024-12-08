import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Card, Checkbox, Text, IconButton } from "react-native-paper";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleCompletion: (id: string) => void;
}

const TaskList = ({
  tasks,
  onEdit,
  onDelete,
  onToggleCompletion,
}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Checkbox
              status={item.completed ? "checked" : "unchecked"}
              onPress={() => onToggleCompletion(item.id)}
            />
            <Text
              style={[styles.taskTitle, item.completed && styles.completedTask]}
            >
              {item.title}
            </Text>
            <IconButton
              icon="pencil"
              onPress={() => onEdit(item)}
              style={styles.editButton}
            />
            <IconButton
              icon="delete"
              onPress={() => onDelete(item.id)}
              style={styles.deleteButton}
            />
          </Card.Content>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default TaskList;
