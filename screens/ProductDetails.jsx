import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

const ProductDetails = () => {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = React.useState("L");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity>
          <Text style={styles.bookmarkIcon}>☆</Text>
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image
        source={{ uri: "/placeholder.svg" }}
        style={styles.productImage}
        resizeMode="cover"
      />

      {/* Product Info */}
      <View style={styles.productInfo}>
        <View style={styles.titleContainer}>
          <Text style={styles.productTitle}>Premium Tagerine Shirt</Text>
          <View style={styles.variantContainer}>
            {[1, 2, 3].map((variant) => (
              <View key={variant} style={styles.variantDot} />
            ))}
          </View>
        </View>

        {/* Size Selector */}
        <Text style={styles.sizeLabel}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSize,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Price and Add to Cart */}
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>$257.85</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  backButton: {
    fontSize: 24,
  },
  bookmarkIcon: {
    fontSize: 24,
  },
  productImage: {
    width: "100%",
    height: 400,
    backgroundColor: "#f5f5f5",
  },
  productInfo: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  variantContainer: {
    flexDirection: "row",
    gap: 8,
  },
  variantDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ddd",
  },
  sizeLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  sizeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  selectedSize: {
    backgroundColor: "#000",
  },
  sizeText: {
    fontSize: 16,
    color: "#000",
  },
  selectedSizeText: {
    color: "#fff",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#FF6B00",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ProductDetails;
