import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./Cart.style";

function CheckoutBill() {
  const totalBill = useSelector((state: any) => state.cart.totalBill);
  return (
    <>
      <View style={styles.checkoutContainer}>
        <View style={styles.item}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>${totalBill.toFixed(2)}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Delivery</Text>
          <Text style={styles.value}>$2.00</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>${(totalBill + 2).toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
}

export default CheckoutBill;
