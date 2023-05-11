import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const DistanceCard = ({ children }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{children.title}</Text>
        <Text style={styles.itemDistance}>{children.distance} M</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DistanceCard;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
    borderBottomWidth: 1,
    width: "80%",
    alignSelf: "center",
    borderBottomColor: "#ababab",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 1,
  },
  itemDistance: {
    fontSize: 20,
    fontWeight: "300",
  },
});