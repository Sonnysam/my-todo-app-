import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* My Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>My Todos</Text>

        {/* Task Items */}
        <View style={styles.item}>
          <Task text= { "Task 1" }/>
          <Task text= { "Task 2" }/>
          <Task text= { "Task 3" }/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {},
});
