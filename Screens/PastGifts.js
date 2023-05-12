import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../Components/CustomText";
import Renkler from "../Constants/Renkler";

const PastGifts = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Geçmiş Hediyeler",
      headerLeftLabelVisible: false,
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.touchable}
          >
            <Entypo name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <CustomText style={styles.text}>Geçmiş Hediye Bulunmuyor...</CustomText>
    </View>
  );
};

export default PastGifts;

const styles = StyleSheet.create({
  touchable: {
    paddingLeft: 15,
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: Renkler.griYazi,
  },
});
