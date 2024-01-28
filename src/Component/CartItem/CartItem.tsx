import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../Slices/cartSlice";
import Icon from "react-native-vector-icons/FontAwesome";
function CartItem({ quantity, image, title, price, id }) {
  const dispatch = useDispatch();
  console.log("img", image);
  return (
    <>
      <View>
        <View>
          <Image source={{ uri: image }} width={80} height={80} />
          <View>
            <Text>{title}</Text>
            <Text> ${price}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => dispatch(increaseQuantity(id))}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon name="plus" size={20} color="black" />
          </TouchableOpacity>
          {/* <Button
            onPress={() => dispatch(increaseQuantity(id))}
            title="Add"
          ></Button> */}
          <Text>{quantity}</Text>
          <TouchableOpacity
            onPress={() => dispatch(decreaseQuantity(id))}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon name="minus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default CartItem;
