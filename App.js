import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* My Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>My Todos</Text>

        {/* Task Items */}
        <View style={styles.item}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  taskWrapper: {},
  title: {},
  item: {},
});
