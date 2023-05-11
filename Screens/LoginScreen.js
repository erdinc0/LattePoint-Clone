import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(64, 164, 221, 1)", "transparent"]}
        style={styles.background}
      >
        <View style={styles.mainContainer}>
          <View style={styles.contextContainer}>
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
          </View>
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
});
