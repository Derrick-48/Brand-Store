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
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

// Import the products data from the data.js file
import { products } from "../assets/data";

const ProductCard = ({ item }) => {
  const navigation = useNavigation(); // Hook to use navigation

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductDetails", { productId: item.id })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <View style={styles.iconContainer}>
          <View style={styles.circle}>
            <Image
              source={item.image}
              style={styles.circleImage}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductGrid = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard item={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.grid}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductGrid;

// Calculate dimensions
const { width } = Dimensions.get("window");
const CARD_MARGIN = 10; // Adjusted margin
const CARD_WIDTH = (width - CARD_MARGIN * 3) 

// Styles
const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 10,
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
    elevation: 4, // Optional shadow for Android
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
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    marginTop: 164,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 15, // Correct numeric value for a circle
    borderWidth: 1,
    borderColor: "#000",
    overflow: "hidden", // Ensure the child image stays within the circle
  },
  circleImage: {
    width: "100%",
    height: "100%",
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
