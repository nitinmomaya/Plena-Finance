import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../Slices/cartSlice";
import Icon from "react-native-vector-icons/FontAwesome";
import { style } from "./CartItem.style";
function CartItem({ quantity, image, title, price, id }) {
  const dispatch = useDispatch();
  console.log("img", image);
  return (
    <>
      <View style={style.cartItemContainer}>
        <Image
          style={{ marginBottom: 8 }}
          source={{ uri: image }}
          width={80}
          height={80}
        />
        <View
          style={{ flex: 0.6, marginHorizontal: 16, alignItems: "flex-start" }}
        >
          <Text>{title}</Text>
          <Text> ${price.toFixed(2)}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 0.4,
          }}
        >
          <TouchableOpacity
            onPress={() => dispatch(decreaseQuantity(id))}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity
            onPress={() => dispatch(increaseQuantity(id))}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default CartItem;
