import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

const Search = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="flex-1 justify-center items-center bg-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("Onboarding")} // Navigate to the onboarding screen
          className="px-4 py-2 bg-blue-500 rounded-full"
        >
          <Text className="text-white font-bold">Go to Onboarding</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
