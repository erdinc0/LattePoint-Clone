import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import CupContainer from "../Components/CupContainer";
import { Ionicons } from "@expo/vector-icons";
import Renkler from "../Constants/Renkler";
import SugarSelectorItem from "../Components/SugarSelectorItem";
import CustomButton from "../Components/CustomButton";
import CustomText from "../Components/CustomText";

let deviceWidth = Dimensions.get("screen").width;

const CoffeeDetailsScreen = () => {
  /* bosluk */
  let route = useRoute();
  let navigasyon = useNavigation();

  useEffect(() => {
    navigasyon.setOptions({
      headerTitle: route.params.title,
    });
  }, []);

  let [sugar, setSugar] = useState(-1);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.forShadow}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/img/beans.jpeg")}
            />

            <CupContainer />

            <View style={styles.profileContiner}>
              <TouchableOpacity onPress={() => navigasyon.goBack()}>
                <View style={styles.personContainer}>
                  <Ionicons style={styles.person} name="ios-chevron-back" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.hotShotContainer}>
            <Image
              style={styles.coffeeCup}
              source={require("../assets/img/coffeeCup.png")}
            />
            <Image
              style={styles.littleBeans}
              source={require("../assets/img/littleBeans.png")}
            />

            <View style={styles.coffeeNameContainer}>
              <CustomText style={styles.coffeeName}>
                {route.params.title}
              </CustomText>
            </View>
          </View>
        </View>
        <View style={styles.bottomMainContainer}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.bottomContentContainer}>
              <CustomText style={styles.kahveAciklama}>
                Kahve severlerin tercihi espresso ve yumuşak süt köpüğü ile
                taçlandırılmış sütün mükemmel uyumu. Bir kahve klasiği.
              </CustomText>
              <CustomText style={styles.sekerTercihi}>Şeker Ekle:</CustomText>
              <View style={styles.sugarMainContainer}>
                <SugarSelectorItem
                  kacSeker={0}
                  setSugar={setSugar}
                  sugarState={sugar}
                />
                <SugarSelectorItem
                  kacSeker={1}
                  setSugar={setSugar}
                  sugarState={sugar}
                />
                <SugarSelectorItem
                  kacSeker={2}
                  setSugar={setSugar}
                  sugarState={sugar}
                />
                <SugarSelectorItem
                  kacSeker={3}
                  setSugar={setSugar}
                  sugarState={sugar}
                />
              </View>

              <View style={styles.odemeAlani}>
                <CustomButton icon="cup" bgFill={true} bardak={true}>
                  <CustomText style={styles.boldText}>Bardak</CustomText> ile
                  Öde
                </CustomButton>
                <CustomButton bardak={true} icon="credit-card" bgFill={false}>
                  <CustomText style={styles.boldText}>Kredi Kartı</CustomText>{" "}
                  ile Öde
                  <CustomText style={styles.boldText}>
                    {" "}
                    {route.params.fiyat} ₺
                  </CustomText>
                </CustomButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({
  person: {
    padding: 8,
    fontSize: 22,
    color: "#9e9e9e",
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
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: deviceWidth < 390 ? 295 : 380,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: "hidden",
  },

  hotShotContainer: {
    top: deviceWidth < 390 ? 35 : 125,
    position: "absolute",
    alignSelf: "center",
    width: "68%",
    height: 300,
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },

  coffeeCup: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  littleBeans: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 155,
    left: 130,
    transform: [{ rotate: "35deg" }],
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  coffeeName: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    width: 145,
    fontFamily: "OpenSans-SemiBold",
  },
  coffeeNameContainer: {
    position: "absolute",
    top: 108,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 108,
  },
  bottomMainContainer: {
    backgroundColor: Renkler.bgColor,
    marginTop: 85,
    flex: 1,
  },
  bottomContentContainer: {
    width: "90%",
    alignSelf: "center",
  },
  view: {},
  mainContainer: {
    flex: 1,
  },
  forShadow: {
    shadowOpacity: 0.25,
    shadowOffset: { height: 1, width: 1 },
  },
  sugarMainContainer: {
    flexDirection: "row",
  },
  sekerTercihi: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "700",
    fontFamily: "OpenSans-ExtraBold",
    color: "#484848",
  },
  kahveAciklama: {
    textAlign: "center",
    paddingBottom: 20,
    fontFamily: "OpenSans-Light",
  },
  boldText: {
    fontFamily: "OpenSans-Bold",
  },
  odemeAlani: {
    marginTop: 10,
  },
});
