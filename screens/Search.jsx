import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { Search, Sliders, ChevronLeft } from "react-native-feather";
import CategoriesList from "../components/CategoriesList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([
    {
      id: "1",
      name: "Premium Tagerine Shirt",
      price: 257.85,
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Leather Tagerine Coat",
      price: 357.85,
      image: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Casual Denim Jacket",
      price: 199.99,
      image: "/placeholder.svg",
    },
    {
      id: "4",
      name: "Floral Summer Dress",
      price: 149.99,
      image: "/placeholder.svg",
    },
    {
      id: "5",
      name: "Classic White Sneakers",
      price: 89.99,
      image: "/placeholder.svg",
    },
    {
      id: "6",
      name: "Slim Fit Chino Pants",
      price: 79.99,
      image: "/placeholder.svg",
    },
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement actual search logic here
  };

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Image source={{ uri: item.image }} style={styles.resultImage} />
      <Text style={styles.resultName} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.resultPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft width={24} height={24} stroke="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search
            width={20}
            height={20}
            stroke="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for items..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Sliders width={20} height={20} stroke="#FF6B00" />
        </TouchableOpacity>
      </View>

      <CategoriesList />

      <FlatList
        data={searchResults}
        renderItem={renderSearchResult}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.resultRow}
        contentContainerStyle={styles.resultList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  placeholder: {
    width: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  filterButton: {
    padding: 10,
  },
  filterChips: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  filterChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginRight: 10,
  },
  activeFilterChip: {
    backgroundColor: "#FF6B00",
  },
  filterChipText: {
    fontSize: 14,
    color: "#666",
  },
  activeFilterChipText: {
    color: "#fff",
  },
  resultList: {
    paddingHorizontal: 10,
  },
  resultRow: {
    justifyContent: "space-between",
  },
  resultItem: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  resultName: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    marginHorizontal: 8,
  },
  resultPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF6B00",
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
});

export default SearchScreen;
