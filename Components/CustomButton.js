import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Renkler from "../Constants/Renkler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";

const CustomButton = ({ children, icon, bgFill, bardak, style }) => {
  let navigasyon = useNavigation();

  return (
    <View style={[styles.buttonMainContainer, style]}>
      <TouchableOpacity
        onPress={() => (bardak ? navigasyon.navigate("CupScreen") : {})}
      >
        <View
          style={[
            styles.buttonInnerContainer,
            {
              backgroundColor: bgFill
                ? Renkler.primaryColor200
                : Renkler.bgColor,
            },
          ]}
        >
          <View style={styles.butonIcon}>
            <MaterialCommunityIcons
              name={icon}
              size={32}
              color={bgFill ? "white" : Renkler.primaryColor200}
            />
          </View>
          <CustomText style={styles.buttonText}>{children}</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonMainContainer: {
    paddingTop: 10,
    alignSelf: "center",
    width: "100%",
  },
  buttonInnerContainer: {
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: Renkler.primaryColor200,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    alignSelf: "center",
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: "300",
    flex: 6,
    textAlign: "center",
  },
  butonIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
});
