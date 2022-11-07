import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      {/* <View style={styles.circle}></View> */}
      <MaterialIcons name="delete" size={24} color="tomato" />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: "tomato",
    marginRight: 10,
    opacity: 0.8,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    // maxWidth: "80%",
    fontWeight: "bold",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: "tomato",
    borderWidth: 2,
  },
});
