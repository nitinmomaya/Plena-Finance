import React, { useState } from "react";
import { Button } from "react-native-elements";
import { wishListAddItem } from "../../Slices/cartSlice";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import { styles } from "./WishList.style";
function WishList({ id }) {
  const [isFilled, setIsFilled] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.conatiner}>
      <Button
        onPress={() => {
          setIsFilled((prev) => !prev);
          dispatch(wishListAddItem(id));
        }}
        icon={
          <Icon name={isFilled ? "heart" : "heart-o"} size={20} color={"red"} />
        }
        type="clear"
      />
    </View>
  );
}

export default WishList;
