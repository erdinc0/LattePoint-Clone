import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Renkler from "../Constants/Renkler";

const CustomText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({ text: { fontFamily: "OpenSans-Regular" } });
