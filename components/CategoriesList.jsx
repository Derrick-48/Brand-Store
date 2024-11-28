import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Mock data for categories
const categories = [
  { id: "1", title: "All" },
  { id: "2", title: "Men" },
  { id: "3", title: "Women" },
  { id: "4", title: "Kids" },
  { id: "5", title: "Other" },
];

const CategoriesList = () => {
  const [selectedId, setSelectedId] = useState("1");

  const handlePress = (item) => {
    setSelectedId(item.id);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        style={[
          styles.category,
          isSelected ? styles.selectedCategory : styles.unselectedCategory,
        ]}
        onPress={() => handlePress(item)}
      >
        <Text
          style={[
            styles.categoryText,
            isSelected && styles.selectedCategoryText,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  flatListContent: {
    alignItems: "center",
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  selectedCategory: {
    backgroundColor: "#FF9900", // Change to the orange shade from the image
  },
  unselectedCategory: {
    backgroundColor: "#F6F6F6",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  selectedCategoryText: {
    color: "#FFF",
  },
});

export default CategoriesList;
