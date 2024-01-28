import React from "react";
import {
  Button,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./ProductCard.style";
import { addItem, increaseQuantity } from "../../Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ id, price, item, name, image, navigation }) {
  console.log("id", id);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const navigateToCart = (totalItems) => {
    navigation.navigate("Cart", { totalItems });
  };
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

        <View>
          <View>
            <Text>${price}</Text>
            <Text>{name}</Text>
          </View>
          <View>
            <Button
              onPress={() => {
                dispatch(addItem(item));
                navigation.navigate("Cart", { id });
              }}
              title={"ADD"}
            ></Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
