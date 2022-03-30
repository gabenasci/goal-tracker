import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  // SCROLLVIEW RENDERS ALL ITEMS INSIDE, WHICH CAN CAUSE PERFORMANCE ISSUES
  // ONLY USE SCROLLVIEW FOR LIMITED AMOUNTS OF CONTENT

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Text style={styles.title}>Goalkeeper</Text>
      <GoalInput
        isVisible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Add New Goal"
          color="#6044ff"
          onPress={startAddGoalHandler}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // makes parent component take all space
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#1e085a',
    paddingBottom: 35,
  },
  title: {
    color: '#fff',
    fontWeight: "200",
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 18,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  goalsContainer: {
    flex: 9, // child component takes 4/5 space
    marginTop: 15
  },
  button: {
    paddingHorizontal: 8
  }
});
