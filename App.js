import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItem, setTaskItem] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const handleDelete = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };

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
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
          }
        </View>
      </View>

      {/* Key Board Avoiding View Added */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        {/* Add Task */}
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={task}
          onChange={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    marginTop: 12,
  },
  item: {
    marginTop: 20,
  },
  keyboardAvoidingView: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 33.33,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "tomato",
    width: 300,
    elevation: 3,
    fontSize: 17,
  },
  addButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderWidth: 1,
    borderColor: "tomato",
  },
  addButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});
