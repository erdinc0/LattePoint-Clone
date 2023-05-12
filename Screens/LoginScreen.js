import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Renkler from "../Constants/Renkler";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
  let navigasyon = useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={[Renkler.bgColor, "white"]}
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <View
            style={{
              borderRadius: 30,
              width: 300,
              height: 300,
              overflow: "hidden",
              alignSelf: "center",
            }}
          >
            <Image
              style={styles.underConstruction}
              source={require("../assets/img/underConstruction.jpg")}
            />
          </View>
          <View style={{ width: "80%", alignSelf: "center" }}>
            <TouchableOpacity onPress={() => navigasyon.goBack()}>
              <CustomButton icon="run" bgFill={true}>
                <Text style={{ fontWeight: "800" }}>Geri Dön</Text>
              </CustomButton>
            </TouchableOpacity>
          </View>
          {/*  <View style={styles.contextContainer}>
            <Text style={styles.title}>Telefon Numaranız: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Telefon Numaranız..."
            />
            <Text style={styles.title}>Şifreniz: </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Şifreniz..."
            />
          </View> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "center",
  },
  contextContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    alignSelf: "center",
  },
  title: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    fontSize: 16,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
  },
  underConstruction: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});
