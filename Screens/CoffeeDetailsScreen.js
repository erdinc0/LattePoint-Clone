import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import CupContainer from "../Components/CupContainer";
import { Ionicons } from "@expo/vector-icons";
import Renkler from "../Constants/Renkler";

let deviceWidth = Dimensions.get("screen").width;

const CoffeeDetailsScreen = () => {
  let route = useRoute();
  let navigasyon = useNavigation();

  useEffect(() => {
    navigasyon.setOptions({
      headerTitle: route.params.title,
    });
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.forShadow}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/img/beans.jpeg")}
            />

            <View style={styles.logoImageTouchContainer}>
              <TouchableOpacity>
                <View style={styles.logoImageContainer}>
                  <Text style={styles.topTitle}>{route.params.title}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <CupContainer />

            <View style={styles.profileContiner}>
              <TouchableOpacity onPress={() => navigasyon.goBack()}>
                <View style={styles.personContainer}>
                  <Ionicons style={styles.person} name="ios-chevron-back" />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.hotShotContainer}></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoImage: {
    resizeMode: "contain",
    width: "100%",
    height: 45,
  },
  logoImageContainer: {
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 2 },
  },
  logoImageTouchContainer: {
    alignSelf: "center",
    position: "absolute",
    top: deviceWidth < 390 ? 32.5 : 62.5,
  },
  topTitle: {
    fontSize: 28,
    width: 250,
    textAlign: "center",
    color: "#7d4b26",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: deviceWidth < 390 ? 225 : 325,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: "hidden",
  },

  person: {
    padding: 8,
    fontSize: 22,
    color: "#7d4b26",
  },
  personContainer: {
    backgroundColor: "white",
    borderRadius: 1000,
  },
  profileContiner: {
    left: 20,
    top: deviceWidth < 390 ? 36 : 66,
    position: "absolute",
    shadowOpacity: 0.25,
    shadowOffset: { height: 1, width: 1 },
  },

  hotShotContainer: {
    top: deviceWidth < 390 ? 125 : 225,
    position: "absolute",
    alignSelf: "center",
    width: "90%",
  },
  mapIcon: { margin: 10 },
  mapIconContainer: {
    backgroundColor: Renkler.primaryColor,
    marginLeft: 10,
    borderRadius: 1000,
  },
  hotShotText: {
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    fontSize: 14,
  },
  contentMainContainer: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  boldText: {
    fontWeight: "800",
  },
  ScrollViewContainer: {
    flex: 1,
  },
  forShadow: {
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
  },
  baslik: { fontSize: 24, paddingLeft: 15 },
  baslikContainer: {
    paddingLeft: 30,
    paddingTop: 25,
    paddingBottom: 10,
    flexDirection: "row",
  },
  baslikIcon: {
    color: Renkler.primaryColor200,
    shadowOffset: { height: 1, width: 1 },
  },
});

/* 
<Ionicons
                    style={{ paddingLeft: 15 }}
                    name="ios-chevron-back"
                    size={32}
                    color={tintColor}
                  /> */
