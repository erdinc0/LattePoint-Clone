import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Renkler from "../Constants/Renkler";
import CustomText from "./CustomText";

const SugarSelectorItem = ({ kacSeker, setSugar, sugarState }) => {
  return (
    <View
      style={[
        styles.sugarInnerContainer,
        {
          flex: sugarState == kacSeker ? 3 : 2,
          opacity: sugarState == kacSeker ? 1 : 0.75,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.sugarTouchable}
        onPress={() => setSugar(kacSeker)}
      >
        <View
          style={[
            styles.sugarContainer,
            {
              backgroundColor:
                sugarState === kacSeker ? "#ffbb29" : Renkler.bgColor,
            },
          ]}
        >
          <Image
            style={styles.sugar}
            source={
              kacSeker == 0
                ? require("../assets/img/noSugar.png")
                : kacSeker == 1
                ? require("../assets/img/oneSugar.png")
                : kacSeker == 2
                ? require("../assets/img/twoSugar.png")
                : require("../assets/img/threeSugar.png")
            }
          />
          <CustomText
            style={{
              fontFamily:
                sugarState === kacSeker ? "OpenSans-Bold" : "OpenSans-Regular",
            }}
          >
            {kacSeker == 0
              ? "Şekersiz"
              : kacSeker == 1
              ? "Az"
              : kacSeker == 2
              ? "Orta"
              : "Çok"}
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SugarSelectorItem;

const styles = StyleSheet.create({
  sugarContainer: {
    width: "100%",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 25,
    borderColor: Renkler.primaryColor,
  },
  sugarTouchable: {},
  sugarInnerContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 2.5,
  },
  sugar: {
    alignItems: "center",
    height: 40,
    width: 40,
  },
});
