import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Renkler from "../Constants/Renkler";
import { useNavigation } from "@react-navigation/native";

let deviceWidth = Dimensions.get("screen").width;

const CupContainer = ({ circle }) => {
  let navigasyon = useNavigation();
  return (
    <>
      {circle ? (
        <View style={styles.mainCupContainerCircle}>
          <TouchableOpacity onPress={() => navigasyon.navigate("CupScreen")}>
            <View style={styles.cupContainerCircle}>
              <MaterialCommunityIcons
                style={[styles.cupCircle]}
                name="cup"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cupContainer}>
          <TouchableOpacity onPress={() => navigasyon.navigate("CupScreen")}>
            <MaterialCommunityIcons
              style={[styles.cup]}
              name="cup"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CupContainer;

const styles = StyleSheet.create({
  cup: {
    fontSize: 38,
    color: "white",
  },
  cupContainer: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 20,
    top: deviceWidth < 390 ? 37 : 67,
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 2 },
  },
  cupCircle: {
    fontSize: 34,
    color: "white",
    padding: 17,
  },
  cupContainerCircle: {
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 2 },
    backgroundColor: Renkler.primaryColor200,
    borderRadius: 1000,
  },
  mainCupContainerCircle: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 20,
    top: deviceWidth < 390 ? 37 : 67,
  },
});
