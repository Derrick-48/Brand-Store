import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { ChevronLeft, Clock, MapPin } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutScreen() {
  const navigation = useNavigation();

  const orderDetails = {
    orderId: "#154619",
    totalItems: 3,
    itemsTotal: 116.0,
    deliveryFee: 12.0,
    totalPayment: 128.0,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft width={24} height={24} stroke="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.addressContainer}>
            <MapPin width={24} height={24} stroke="#FF6B00" />
            <View style={styles.addressDetails}>
              <Text style={styles.address}>25/3 Housing Estate, Sylhet</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeButton}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryTime}>
            <Clock width={20} height={20} stroke="#666" />
            <Text style={styles.deliveryTimeText}>
              Delivered in next 7 days
            </Text>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentMethods}>
            <Image
              source={require("../assets/visa.png")}
              style={styles.paymentIcon}
            />
            <Image
              source={require("../assets/amex.png")}
              style={styles.paymentIcon}
            />
            <Image
              source={require("../assets/mastercard.png")}
              style={styles.paymentIcon}
            />
            <Image
              source={require("../assets/paypal.png")}
              style={styles.paymentIcon}
            />
            <Image
              source={require("../assets/applepay.png")}
              style={styles.paymentIcon}
            />
          </View>
        </View>

        {/* Voucher */}
        <TouchableOpacity style={styles.voucherButton}>
          <Text style={styles.voucherButtonText}>Add Voucher</Text>
        </TouchableOpacity>

        {/* Order Note */}
        <View style={styles.noteContainer}>
          <Text style={styles.noteLabel}>Note :</Text>
          <Text style={styles.noteText}>
            Use your order id at the payment. Your id {orderDetails.orderId} if
            you forget to put your order id we can't confirm the payment.
          </Text>
        </View>

        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Total Items ({orderDetails.totalItems})
            </Text>
            <Text style={styles.summaryValue}>
              ${orderDetails.itemsTotal.toFixed(2)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Standard Delivery</Text>
            <Text style={styles.summaryValue}>
              ${orderDetails.deliveryFee.toFixed(2)}
            </Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.summaryLabel}>Total Payment</Text>
            <Text style={styles.totalAmount}>
              ${orderDetails.totalPayment.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0, // Add padding for Android status bar
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
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  addressDetails: {
    flex: 1,
    marginLeft: 15,
  },
  address: {
    fontSize: 16,
  },
  changeButton: {
    color: "#FF6B00",
    fontSize: 14,
    fontWeight: "500",
  },
  deliveryTime: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  deliveryTimeText: {
    marginLeft: 10,
    color: "#666",
    fontSize: 14,
  },
  paymentMethods: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  paymentIcon: {
    width: 40,
    height: 25,
    resizeMode: "contain",
  },
  voucherButton: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  voucherButtonText: {
    color: "#666",
    fontSize: 16,
  },
  noteContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  noteLabel: {
    color: "#FF0000",
    fontSize: 14,
    fontWeight: "500",
  },
  noteText: {
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
  },
  summaryContainer: {
    padding: 20,
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
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  payButton: {
    backgroundColor: "#FF6B00",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
