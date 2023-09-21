import { StyleSheet, View, Text, Pressable } from "react-native";

import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalsItem: {
    marginTop: 10,
    margin: 8,
    padding: 8,
    backgroundColor: "#5e05ec",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
