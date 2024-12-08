import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

interface Goal {
  id: string;
  value: string;
}
const Lists = () => {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const setData = (goal: string) => {
    setCourseGoals((previousGoalList) => [
      ...previousGoalList,
      { id: Math.random().toString(), value: goal },
    ]);
  };

  const removeTask = (currentGoalId: string) => {
    setCourseGoals((preGoals) =>
      preGoals.filter((goal) => goal.id !== currentGoalId)
    );
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={setData} />
      <FlatList
        keyExtractor={(item, index) => item.id} // Ensure unique key
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            goalObject={itemData.item}
            onDelete={() => removeTask(itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { padding: 50, margin: 10 },
});

export default Lists;

// setCourseGoals((previousGoalList) => [...previousGoalList, enteredGoal]); //This is awesome.React automatically provides the current state (courseGoals) as the argument to the function you pass in.
//so  setCourseGoals return the current state ie elements in courseGoals via named previousGoalList , then we add enteredGoal in previousGoalList via spread-operator and return to setCourseGoals. and it set all the values to courseGoals
