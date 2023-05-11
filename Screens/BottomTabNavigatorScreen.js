import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import MapScreen from "./MapScreen";
import CupScreen from "./CupScreen";
import GiftScreen from "./GiftScreen";
let BottomTabNavigator = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import Renkler from "../Constants/Renkler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
let deviceWidth = Dimensions.get("screen").width;

const BottomTabNavigatorScreen = ({ navigation }) => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Renkler.primaryColor200,
        tabBarStyle: {
          height: deviceWidth < 380 ? 60 : 100,
        },
      }}
    >
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/img/homeActive.png")
                  : require("../assets/img/home.png")
              }
              style={{
                width: 45,
                height: 45,
              }}
            />
          ),
        }}
        name="MainScreen"
        component={MainScreen}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/img/mapActive.png")
                  : require("../assets/img/map.png")
              }
              style={{
                width: 45,
                height: 45,
              }}
            />
          ),
          headerShown: false,
        }}
        name="MapScreen"
        component={MapScreen}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/img/giftActive.png")
                  : require("../assets/img/gift.png")
              }
              style={{
                width: 48,
                height: 48,
              }}
            />
          ),
        }}
        name="GiftScreen"
        component={GiftScreen}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/img/cupActive.png")
                  : require("../assets/img/cup.png")
              }
              style={{
                width: 40,
                height: 40,
              }}
            />
          ),
        }}
        name="CupScreen"
        component={CupScreen}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default BottomTabNavigatorScreen;

const styles = StyleSheet.create({});
