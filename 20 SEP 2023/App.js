import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import GoalItem from "./Components/GoalItem";
import Input from "./Components/Input";

export default function App() {
  const [goal, setGoal] = useState([]);

  function addGoalHandler(input) {
    // setGoal([...goal, input]); // not optimise

    setGoal((currentGoal) => [
      ...currentGoal,
      { text: input, key: Math.random() },
    ]);
    // console.log(input);
  }

  function deleteGoalHandler(id) {
    setGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appCont}>
      <Input addGoalHandler={addGoalHandler} />
      <View style={styles.goalsCont}>
        <Text>List of Goals</Text>
        {/* <ScrollView>
          {goal.map((goal) => (
            <View style={styles.goalsItem}>
              <Text style={styles.goalText} key={Math.random()}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={goal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appCont: {
    paddingTop: 50,
    flex: 1,
    // marginTop: 30,
    // padding: 20,
    paddingHorizontal: 16,
  },

  goalsCont: {
    flex: 6,
    marginTop: 30,
    fontSize: 10,
    padding: 10,
  },
});
