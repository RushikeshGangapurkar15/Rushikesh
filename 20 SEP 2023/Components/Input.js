import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";

const Input = (props) => {
  const [input, setInput] = useState("");
  function goalInputHandler(target) {
    // console.log(target);
    setInput(target);
  }

  function addGoalHandler() {
    props.addGoalHandler(input);
    setInput("");
  }
  return (
    <View style={styles.inputCont}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal ! "
        onChangeText={goalInputHandler}
        value={input}
      />

      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between ",
    paddingBottom: 24,

    borderBottomWidth: 1,
    borderColor: "#c5c5c5",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 10,
  },
});
