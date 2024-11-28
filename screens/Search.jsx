import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";

const Search = ({ navigation }) => {
  return (
    // Conditionally render SafeAreaView based on platform
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <View
        className="flex-1 justify-center items-center bg-gray-100"
        style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }} // Add padding-top for Android
      >
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
