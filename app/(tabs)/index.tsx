import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo);
  const clearTodos = useMutation(api.todos.clearAllTodos);
  console.log(todos);

  return (
    <View style={styles.container}>
      <Text>Hello, Expo!</Text>
      <TouchableOpacity onPress={toggleMode}>
        <Text>Toggle The Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({ text: "New Todo" })}>
        <Text>Add Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearTodos()}>
        <Text>Clear All Todos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
