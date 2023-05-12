import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CupContainer from "../Components/CupContainer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Renkler from "../Constants/Renkler";
import CustomText from "../Components/CustomText";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../Components/CustomButton";

let deviceHeight = Dimensions.get("screen").height;
let deviceWidth = Dimensions.get("screen").width;

const CupScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Bardak Satın Al",
      headerRight: () => (
        <CupContainer
          color={true}
          styleCup={styles.styleCup}
          style={styles.cupContainer}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.cover}
          source={require("../assets/img/giftCover.jpg")}
        />
      </View>

      <View style={styles.markersPanel}>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.bottomContainer}>
              <CustomText style={styles.bottomText}>
                Toplam 0 bardağınız bulunuyor {"\n"}
              </CustomText>
              <CustomText style={styles.bottomText}>
                Bardak çeşidini seçiniz
              </CustomText>
            </View>
          </ScrollView>
        </View>
        <View style={styles.navLogoContainer}>
          <MaterialCommunityIcons
            style={styles.navLogo}
            name="cup-off-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default CupScreen;

const styles = StyleSheet.create({
  cupContainer: {
    position: "relative",
    top: "auto",
    right: 25,
    shadowOpacity: 0,
  },
  styleCup: {
    color: "#d8d8d8",
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
  },
  topContentContainer: {
    paddingVertical: 20,
    width: "90%",
  },
  cover: {
    resizeMode: "cover",
    height: 300,
    width: "100%",
  },
  topSelector: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  hediyeler: {
    fontWeight: "500",
    fontSize: 16,
    color: Renkler.griYazi200,
    fontFamily: "OpenSans-SemiBold",
  },
  hepsinigor: {
    fontWeight: "500",
    fontSize: 16,
    color: Renkler.primaryText,
    fontFamily: "OpenSans-SemiBold",
  },
  aciklama: {
    paddingTop: 30,
    fontWeight: "400",
    color: Renkler.griYazi200,
  },
  markersPanel: {
    position: "absolute",
    bottom: 0,
    height: deviceWidth < 390 ? deviceHeight * 0.55 : deviceHeight * 0.7,
    width: "100%",
  },

  scrollViewContainer: {
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#fafafa",
    overflow: "hidden",
    height: "100%",
  },
  navLogoContainer: {
    position: "absolute",
    backgroundColor: Renkler.primaryColor200,
    alignSelf: "center",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    top: -25,
  },
  navLogo: {
    padding: 17.5,
    color: "white",
    fontSize: 30,
  },
  scrollContent: {
    paddingTop: 70,
  },
  bottomContainer: {
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    height: 300,
  },
  bottomText: {
    fontSize: 16,
  },
  bottomButton: {
    marginTop: 20,
  },
  bottomLogo: {
    color: "#cccccc",
  },
  bottomLogoTouchable: {
    marginTop: 20,
    alignItems: "center",
  },
});
