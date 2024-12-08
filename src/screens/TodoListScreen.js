import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import TodoItem from "../component/TodoItem";

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // Lifecycle: componentDidMount
  useEffect(() => {
    console.log("App mounted");
    return () => {
      // Lifecycle: componentWillUnmount
      console.log("App unmounted");
    };
  }, []);

  // Function to add a new todo
  const addTodo = () => {
    if (inputText.trim() === "") {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), text: inputText },
    ]);
    setInputText("");
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Add Task" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={deleteTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default TodoListScreen;
