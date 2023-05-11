import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import { StatusBar } from "expo-status-bar";
import BottomTabNavigatorScreen from "./Screens/BottomTabNavigatorScreen";
import CoffeeDetailsScreen from "./Screens/CoffeeDetailsScreen";
import { Ionicons } from "@expo/vector-icons";

let Stack = createStackNavigator();

export default function App() {
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
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTintColor: "black",
              headerShown: false,
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
