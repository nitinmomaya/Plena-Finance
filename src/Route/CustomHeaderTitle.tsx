import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import cart from "../../assets/cart.svg";
import { SvgUri } from "react-native-svg";

const CustomHeaderTitle = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <SvgUri width="100" height="100" source={cart} />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        {cartItems.length}
      </Text>
    </View>
  );
};

export default CustomHeaderTitle;
