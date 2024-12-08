import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{todo.text}</Text>
      <Button title="Delete" onPress={() => onDelete(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#e9ecef",
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
  },
});

export default TodoItem;
