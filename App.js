import * as React from "react";
import { Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "./global.css";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Search from "./screens/Search";
import Setting from "./screens/Setting";
import Onboarding from "./screens/Onboarding";
import Signout from "./screens/Signout";
import SignIn from "./screens/SignIn";
import Signup from "./screens/Signup";

const Tabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: Home,

    Search: Search,

    Cart: Cart,

    Settings: Setting,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Tabs: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },

    Onboarding: {
      screen: Onboarding,
      options: {
        headerShown: false,
      },
    },

    Signup: {
      screen: Signup,
      options: {
        headerShown: false,
      },
    },
    SignIn: {
      screen: SignIn,
      options: {
        headerShown: false,
      },
    },
    Signout: {
      screen: Signout,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
