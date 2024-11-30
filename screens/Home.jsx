import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesList from "../components/CategoriesList";
import HeaderSection from "../components/HeaderSection";
import ProductCard from "../components/ProductCards";

const Home = () => {
  //setting State for active and inactive labels
  return (
    <SafeAreaView className="bg-white h-screen">
      <HeaderSection />
      <CategoriesList />
      <ProductCard />
    </SafeAreaView>
  );
};

export default Home;
