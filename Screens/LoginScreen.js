import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Renkler from "../Constants/Renkler";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomText from "../Components/CustomText";
import { Ionicons } from "@expo/vector-icons";

let deviceWidth = Dimensions.get("screen").width;

const LoginScreen = () => {
  let navigasyon = useNavigation();

  useEffect(() => {
    navigasyon.setOptions({
      headerShown: false,
      headerTitle: "Giriş Yap",
      headerLeft: () => {
        return;
      },
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileContiner}>
        <TouchableOpacity onPress={() => navigasyon.goBack()}>
          <View style={styles.personContainer}>
            <Ionicons style={styles.person} name="ios-chevron-back" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ width: "80%", alignSelf: "center" }}>
        <View style={styles.contextContainer}>
          <CustomText style={styles.baslik}>Giriş Yap</CustomText>
          <TextInput
            placeholderTextColor={Renkler.griYazi}
            style={styles.textInput}
            placeholder="Telefon Numaranız..."
          />

          <TextInput
            placeholderTextColor={Renkler.griYazi}
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Şifreniz..."
          />
          <CustomButton
            style={styles.CustomButton}
            icon="login"
            bgFill={true}
            onPress={navigasyon.goBack}
          >
            <CustomText style={{ fontFamily: "OpenSans-Regular" }}>
              Giriş Yap
            </CustomText>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: Renkler.bgColor,
  },
  contextContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  title: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 16,
  },
  textInput: {
    width: "100%",
    borderRadius: 50,
    padding: 20,
    backgroundColor: "#dadada",
    marginTop: 20,
  },
  underConstruction: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  CustomButton: {
    marginTop: 10,
  },
  baslik: {
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
  },
  person: {
    padding: 8,
    fontSize: 22,
    color: Renkler.bgColor,
  },
  personContainer: {
    backgroundColor: "#5e5e5e",
    borderRadius: 1000,
  },
  profileContiner: {
    left: 20,
    top: 20,
    position: "absolute",
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 5,
  },
});
