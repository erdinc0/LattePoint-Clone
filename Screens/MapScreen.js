import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import Renkler from "../Constants/Renkler";
import CupContainer from "../Components/CupContainer";
import DistanceCard from "../Components/DistanceCard";

let deviceHeight = Dimensions.get("screen").height;
let deviceWidth = Dimensions.get("screen").width;
const MapScreen = () => {
  let [location, setLocation] = useState({
    latitude: 38.9637,
    longitude: 35.2433,
    latitudeDelta: 0.0922,
    longitudeDelta: 20,
  });
  let [locationPerm, setLocationPerm] = useState(false);

  const getPermissons = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("grant permission please");
      return;
    } else {
      const currentPosition = await Location.getCurrentPositionAsync({});
      setLocationPerm(true);
      setLocation({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  useEffect(() => {
    getPermissons();
    console.log(location);
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: 38.9637,
              longitude: 35.2433,
              latitudeDelta: 0.0922,
              longitudeDelta: 20,
            }}
            region={location}
            style={styles.map}
            showsUserLocation={true}
          />
          {locationPerm === false ? (
            <View style={styles.konumTextContainer}>
              <Text style={styles.konumText}>Konum Bulunuyor...</Text>
            </View>
          ) : (
            <></>
          )}
          <CupContainer circle={true} />
        </View>
        <View style={styles.markersPanel}>
          <View style={styles.scrollViewContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              <DistanceCard>
                {{ title: "LattePoint", distance: 1710 }}
              </DistanceCard>
              <DistanceCard>
                {{ title: "LattePoint", distance: 1050 }}
              </DistanceCard>
              <DistanceCard>
                {{ title: "LattePoint", distance: 700 }}
              </DistanceCard>
              <DistanceCard>
                {{ title: "LattePoint", distance: 470 }}
              </DistanceCard>
              <DistanceCard>
                {{ title: "LattePoint", distance: 2430 }}
              </DistanceCard>
              <DistanceCard>
                {{ title: "LattePoint", distance: 930 }}
              </DistanceCard>
            </ScrollView>
            <View style={styles.navLogoContainer}>
              <MaterialIcons
                style={styles.navLogo}
                name="navigation"
                size={24}
                color="black"
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: deviceHeight * 0.55,
  },
  markersPanel: {
    position: "absolute",
    bottom: 0,
    height: deviceHeight * 0.5,
  },

  scrollViewContainer: {
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: "#fafafa",
  },
  scrollContent: {
    paddingTop: 45,
    paddingBottom: 140,
  },
  mainContainer: {
    flex: 1,
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
    fontSize: 40,
  },
  konumText: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    color: "white",
  },
  konumTextContainer: {
    alignSelf: "center",
    position: "absolute",
    top: 70,
    borderRadius: 1000,
    backgroundColor: "#0000009c",
  },
});
