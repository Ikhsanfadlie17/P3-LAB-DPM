import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TodoListScreen from "./src/screens/TodoListScreen";

export default function App() {
  return (
    <NavigationContainer>
      <TodoListScreen />
    </NavigationContainer>
  );
}
