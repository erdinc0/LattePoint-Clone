import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Renkler from "../Constants/Renkler";
import { useNavigation } from "@react-navigation/native";

let deviceWidth = Dimensions.get("screen").width;

const CoffeCard = ({ children, aciklama, fiyat, cold }) => {
  let navigasyon = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigasyon.navigate("CoffeeDetailsScreen", { title: children })
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/img/coffee.jpg")}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{children}</Text>
          <Text style={styles.aciklama}>{aciklama}</Text>
        </View>

        <View
          style={[
            styles.buyNow,
            {
              backgroundColor:
                cold === 1 ? Renkler.secondary : Renkler.primaryColor,
            },
          ]}
        >
          <Text style={styles.buyNowText}>{fiyat} ₺</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: -20,
    borderRadius: 1000,
  },
  imageContainer: {
    height: 125,
    width: 125,
  },
  title: {
    fontWeight: "800",
    fontSize: 16,
    textAlign: "center",
    fontSize: deviceWidth < 380 ? 16 : 18,
  },
  aciklama: {
    fontWeight: "300",
    textAlign: "center",
    fontSize: deviceWidth < 380 ? 14 : 16,
  },
  titleContainer: {
    alignItems: "center",
    flex: 3,
    width: "90%",
  },
  mainContainer: {
    alignItems: "center",
    backgroundColor: "white",
    width: deviceWidth * 0.45,
    height: 240,
    marginVertical: 20,
    marginHorizontal: deviceWidth * 0.025,
    borderRadius: 25,
  },
  buyNow: {
    flex: 2,
    backgroundColor: Renkler.primaryColor,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  buyNowText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
});
