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
import { useNavigation } from "@react-navigation/native";

// Import the products data from the data.js file
import { products } from "../assets/data";

const ProductCard = ({ item }) => {
  const navigation = useNavigation();

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
      keyExtractor={(item) => item.id.toString()}
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
const CARD_MARGIN = 12; // Adjusted margin for better spacing
const CARD_WIDTH = (width - CARD_MARGIN * 3) / 2;

// Styles
const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: CARD_MARGIN,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: CARD_WIDTH,
    marginBottom: CARD_MARGIN * 2,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Adds shadow for Android
  },
  imageContainer: {
    position: "relative",
    aspectRatio: 1, // Ensures square images
    borderRadius: 16,
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
    borderRadius: 24,
    padding: 4,
    elevation: 2,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14, // Proper circular shape
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  circleImage: {
    width: "100%",
    height: "100%",
  },
  details: {
    padding: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  name: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
});
