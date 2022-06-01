import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* My Tasks */}
      <View style={styles.taskWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>My Todos</Text>
          <Image
            source={require("./assets/images/todo.png")}
            style={{ width: 70, height: 70, marginLeft: 10 }}
          />
        </View>

        {/* Task Items */}
        <View style={styles.item}>
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
          <Task text={"Task 3"} />
        </View>
      </View>

      {/* Key Board Avoiding View Added */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  taskWrapper: {
    padding: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginTop: 12,
  },
  item: {
    marginTop: 20,
  },
});
