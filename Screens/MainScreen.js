import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import CupContainer from "../Components/CupContainer";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import CoffeCard from "../Components/CoffeCard";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Renkler from "../Constants/Renkler";
import { useRef } from "react";

let deviceWidth = Dimensions.get("screen").width;
let deviceHeight = Dimensions.get("screen").height;

const MainScreen = ({ navigation }) => {
  let [isTop, setIsTop] = useState(false);

  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: isTop ? 0 : 100000,
      animated: true,
    });
    setIsTop(!isTop);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <View style={styles.forShadow}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/img/topImg.jpg")}
            />
            <View style={styles.logoImageTouchContainer}>
              <TouchableOpacity onPress={onPressTouch}>
                <View style={styles.logoImageContainer}>
                  <Image
                    style={styles.logoImage}
                    source={require("../assets/img/logo.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <CupContainer />

            <View style={styles.profileContiner}>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <View style={styles.personContainer}>
                  <Ionicons
                    style={styles.person}
                    name="ios-person"
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.hotShotContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MapScreen");
                }}
              >
                <View style={styles.hotShot}>
                  <View style={styles.mapIconContainer}>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/img/mapActive.png")}
                      style={[
                        {
                          width: 45,
                          height: 45,
                        },
                        styles.mapIcon,
                      ]}
                    />
                  </View>
                  <Text style={styles.hotShotText}>
                    Yakınında <Text style={styles.boldText}>4</Text> makine
                    bulunuyor.
                    {"\n"}
                    <Text style={styles.boldText}>
                      En yakın LattePoint'i bul
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.ScrollViewContainer}>
          <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: deviceWidth < 390 ? 350 : 500,
              marginTop: deviceWidth < 390 ? 230 : 335,
            }}
          >
            <View style={styles.baslikContainer}>
              <FontAwesome5
                style={styles.baslikIcon}
                name="mug-hot"
                size={24}
                color="black"
              />
              <Text style={styles.baslik}>Hot Beverages</Text>
            </View>
            <View style={styles.contentMainContainer}>
              <CoffeCard fiyat={27.95} aciklama="Kahve & Soğuk Süt">
                Latte
              </CoffeCard>
              <CoffeCard fiyat={24.95} aciklama="Kahve & Soğuk Süt">
                Americano
              </CoffeCard>
              <CoffeCard fiyat={31.95} aciklama="Kahve & Soğuk Süt">
                White Chocolate Mocha
              </CoffeCard>
              <CoffeCard fiyat={39.95} aciklama="Kahve & Soğuk Süt">
                Caramel Mocha
              </CoffeCard>
              <CoffeCard fiyat={27.95} aciklama="Kahve & Soğuk Süt">
                Latte
              </CoffeCard>
              <CoffeCard fiyat={31.95} aciklama="Kahve & Soğuk Süt">
                Americano
              </CoffeCard>
              <CoffeCard fiyat={24.95} aciklama="Kahve & Soğuk Süt">
                White Chocolate Mocha
              </CoffeCard>
              <CoffeCard fiyat={34.95} aciklama="Kahve & Soğuk Süt">
                Caramel Mocha
              </CoffeCard>
            </View>
            <View style={styles.baslikContainer}>
              <Ionicons
                style={[styles.baslikIcon, { color: Renkler.secondary }]}
                name="ios-snow"
                size={24}
                color="black"
              />
              <Text style={styles.baslik}>Cold Beverages</Text>
            </View>
            <View style={styles.contentMainContainer}>
              <CoffeCard cold={1} fiyat={27.95} aciklama="Kahve & Soğuk Süt">
                Latte
              </CoffeCard>
              <CoffeCard cold={1} fiyat={24.95} aciklama="Kahve & Soğuk Süt">
                Americano
              </CoffeCard>
              <CoffeCard cold={1} fiyat={31.95} aciklama="Kahve & Soğuk Süt">
                White Chocolate Mocha
              </CoffeCard>
              <CoffeCard cold={1} fiyat={39.95} aciklama="Kahve & Soğuk Süt">
                Caramel Mocha
              </CoffeCard>
              <CoffeCard cold={1} fiyat={27.95} aciklama="Kahve & Soğuk Süt">
                Latte
              </CoffeCard>
              <CoffeCard cold={1} fiyat={31.95} aciklama="Kahve & Soğuk Süt">
                Americano
              </CoffeCard>
              <CoffeCard cold={1} fiyat={24.95} aciklama="Kahve & Soğuk Süt">
                White Chocolate Mocha
              </CoffeCard>
              <CoffeCard cold={1} fiyat={34.95} aciklama="Kahve & Soğuk Süt">
                Caramel Mocha
              </CoffeCard>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Renkler.bgColor,
  },
  logoImage: {
    resizeMode: "contain",
    width: "100%",
    height: 45,
  },
  logoImageContainer: {
    backgroundColor: "#0000006a",
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 2 },
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    borderRadius: 10,
  },
  logoImageTouchContainer: {
    alignSelf: "center",
    position: "absolute",
    width: 145,
    height: 55,
    top: deviceWidth < 390 ? 32.5 : 62.5,
  },
  forShadow: {
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 2 },
    zIndex: 10,
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

    position: "absolute",
    top: 0,
    width: "100%",
  },

  person: {
    padding: 8,
    fontSize: 22,
  },
  personContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 1000,
  },
  profileContiner: {
    left: 20,
    top: deviceWidth < 390 ? 36 : 66,
    position: "absolute",
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 2 },
  },
  hotShot: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    borderRadius: 1000,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
