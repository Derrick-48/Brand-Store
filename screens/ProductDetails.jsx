import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import { products } from "../assets/data"; // Import product data
import { ArrowLeft, Bookmark } from "react-native-feather";
import { useCart } from "../components/CartContext"; // Import the custom hook
import Toast from "react-native-toast-message"; // Import toast

const ProductDetails = ({ route }) => {
  const { productId } = route.params;
  const product = products.find((p) => p.id === productId);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = React.useState("L");
  const [quantity, setQuantity] = React.useState(1); // Track the quantity

  const { addToCart } = useCart(); // Get the addToCart function from context

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      image: Image.resolveAssetSource(product.image).uri, // Ensure image is in URI format
      size: selectedSize,
      quantity,
    };
    addToCart(cartProduct);
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Added to Cart",
      text2: `${product.name} x${quantity} has been added to your cart.`,
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  const increaseQuantity = () => setQuantity(quantity + 1); // Increase quantity
  const decreaseQuantity = () => setQuantity(Math.max(quantity - 1, 1)); // Decrease quantity (minimum 1)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color={"black"} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <TouchableOpacity>
          <Bookmark color={"black"} size={24} />
        </TouchableOpacity>
      </View>

      <Image source={product.image} style={styles.productImage} />

      <View style={styles.productInfo}>
        <View style={styles.titleContainer}>
          <Text style={styles.productTitle}>{product.name}</Text>
        </View>

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

        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.price}>
            ${(product.price * quantity).toFixed(2)}
          </Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Toast component */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0, // Adjust for Android status bar
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
  productImage: {
    width: "90%",
    height: 400,
    alignSelf: "center", // Align image in the center
    borderRadius: 30,
    marginLeft: Platform.OS === "android" ? 10 : 0, // Add margin for Android
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
  quantityContainer: {
    marginBottom: 30,
  },
  quantityLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: "500",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
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
