import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import MapScreen from "./MapScreen";
import CupScreen from "./CupScreen";
import GiftScreen from "./GiftScreen";
let BottomTabNavigator = createBottomTabNavigator();
import Renkler from "../Constants/Renkler";
let deviceWidth = Dimensions.get("screen").width;

const BottomTabNavigatorScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Renkler.bgColor }}>
      <BottomTabNavigator.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: Renkler.primaryColor200,
          tabBarStyle: {
            height: deviceWidth < 380 ? 80 : 110,
            paddingTop: deviceWidth < 380 ? 30 : 30,
            paddingBottom: deviceWidth < 380 ? 30 : 40,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,

            shadowOpacity: 0.25,
            shadowRadius: 10,
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
                  width: 40,
                  height: 40,
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
                  width: 40,
                  height: 40,
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
                  width: 45,
                  height: 45,
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
                  width: 35,
                  height: 35,
                }}
              />
            ),
          }}
          name="CupScreen"
          component={CupScreen}
        />
      </BottomTabNavigator.Navigator>
    </View>
  );
};

export default BottomTabNavigatorScreen;

const styles = StyleSheet.create({});
