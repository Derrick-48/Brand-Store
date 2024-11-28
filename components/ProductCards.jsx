import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// Sample data with local images
const products = [
  {
    id: "1",
    image: require("../assets/image.jpg"), // Replace with the correct path to your image
    price: 240.32,
    name: "Tangerine Shirt",
  },
  {
    id: "2",
    image: require("../assets/image1.jpg"), // Replace with the correct path to your image
    price: 325.36,
    name: "Leather Coat",
  },
  {
    id: "3",
    image: require("../assets/image2.jpg"), // Replace with the correct path to your image
    price: 126.47,
    name: "Tangerine Shirt",
  },
  {
    id: "4",
    image: require("../assets/image3.jpg"), // Replace with the correct path to your image
    price: 257.85,
    name: "Leather Coat",
  },
];

// Product Card Component
const ProductCard = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.imageContainer}>
      <Image
        source={item.image} // Use the local image source
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.iconContainer}>
        <View style={styles.circle} />
      </View>
    </View>
    <View style={styles.details}>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

// Main Component
export default function ProductGrid() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.grid}
    />
  );
}

// Calculate dimensions
const { width } = Dimensions.get("window");
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 2;

// Styles
const styles = StyleSheet.create({
  grid: {
    padding: CARD_MARGIN,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: CARD_WIDTH,
    marginBottom: CARD_MARGIN * 2,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    aspectRatio: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
  },
  details: {
    padding: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  name: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
