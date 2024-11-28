import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesList from "../components/CategoriesList";
import ProductGrid from "../components/ProductCards";
import HeaderSection from "../components/HeaderSection";

const Home = () => {
  //setting State for active and inactive labels
  return (
    <SafeAreaView className="bg-white h-screen">
      <HeaderSection />
      <CategoriesList />
      <ProductGrid />
    </SafeAreaView>
  );
};

export default Home;
