import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { useCart } from "../components/CartContext";
import { Heart, Trash2, ChevronLeft } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <View style={styles.cartItem}>
      <Image
        source={{ uri: item.image || "https://via.placeholder.com/80" }}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productVariant}>{item.color}</Text>
        <Text style={styles.productVariant}>Size {item.size}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{item.quantity}x</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Heart width={20} height={20} stroke="#FF6B00" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleRemove}>
            <Trash2 width={20} height={20} stroke="#FF6B00" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Cart = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();
  const navigation = useNavigation();
  const deliveryFee = 12.0;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    navigation.navigate("Checkout", { totalAmount: total });
  };

  return (
    <View style={styles.safeArea}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <ChevronLeft width={24} height={24} stroke="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
          <View style={styles.placeholder} />
        </View>

        <Text style={styles.title}>My Orders</Text>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem item={item} />}
          contentContainerStyle={styles.cartList}
        />

        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Total Items ({getTotalItems()})
            </Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Standard Delivery</Text>
            <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.summaryLabel}>Total Payment</Text>
            <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutButtonText}>Checkout Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cartList: {
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  productVariant: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  quantityContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "500",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  actionButton: {
    padding: 5,
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalRow: {
    marginTop: 5,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#FF6B00",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Cart;
