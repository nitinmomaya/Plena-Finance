import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./ProductCard.style";
import { addItem } from "../../Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import WishList from "../WishList/WishList";
import Icon from "react-native-vector-icons/FontAwesome";
function ProductCard({ id, price, item, name, image, navigation }) {
  console.log("id", id);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Details", { id })}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: image }}
          alt="product-image"
          style={styles.proImage}
        />
        <WishList id={id} />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 0.7, marginVertical: 8 }}>
            <Text>${price}</Text>
            <Text>{name}</Text>
          </View>
          <View>
            <Button
              style={styles.addButton}
              icon={<Icon name={"plus"} size={24} color={"white"} />}
              onPress={() => {
                dispatch(addItem(item));
                navigation.navigate("Cart", { id });
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
