import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function Cart({ route }) {
  const { id } = route.params;

  const cartItems = useSelector((state: any) => state.cart.items);
  const totalBill = useSelector((state: any) => state.cart.totalBill);
  console.log("", cartItems);
  return (
    <>
      <Text>Cart, ${id}</Text>
      <Text>{totalBill}</Text>
      {cartItems.map((item: any) => {
        return (
          <>
            <Text>{item.title}</Text>
          </>
        );
      })}
    </>
  );
}

export default Cart;
