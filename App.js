import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import vector icons
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Search from "./screens/Search";
import Setting from "./screens/Setting";
import Onboarding from "./screens/Onboarding";
import Signout from "./screens/Signout";
import SignIn from "./screens/SignIn";
import Signup from "./screens/Signup";
import ProductDetails from "./screens/ProductDetails";
import SettingsScreen from "./screens/Setting";
import { CartProvider } from "./components/CartContext";
import CheckoutScreen from "./screens/Checkout";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#ff7a00",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <CartProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signout"
          component={Signout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </CartProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
