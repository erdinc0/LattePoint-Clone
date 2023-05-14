import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import { StatusBar } from "expo-status-bar";
import BottomTabNavigatorScreen from "./Screens/BottomTabNavigatorScreen";
import CoffeeDetailsScreen from "./Screens/CoffeeDetailsScreen";
import PastGifts from "./Screens/PastGifts";

import { useFonts } from "expo-font";

let Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="" screenOptions={{}}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="BottomTabNavigatorScreen"
            component={BottomTabNavigatorScreen}
          />
          <Stack.Screen
            options={{ headerShown: false, presentation: "modal" }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PastGifts"
            component={PastGifts}
          />
          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTintColor: "black",
              headerShown: false,
              presentation: "modal",
            }}
            name="CoffeeDetailsScreen"
            component={CoffeeDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
