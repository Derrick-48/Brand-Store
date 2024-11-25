
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";

const Onboarding = () => {

  
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Text className="text-blue-900 text-2xl">Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
