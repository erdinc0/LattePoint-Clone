import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";

const DistanceCard = ({ children }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <CustomText style={styles.itemName}>{children.title}</CustomText>
        <CustomText style={styles.itemDistance}>
          {children.distance} M
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default DistanceCard;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: "#cccccc",
    width: "80%",
    alignSelf: "center",
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
