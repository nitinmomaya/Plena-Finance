import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Component/CartItem/CartItem";

function Cart({ route }) {
  const { id } = route.params;
  const cartItems = useSelector((state: any) => state.cart.items);

  const totalBill = useSelector((state: any) => state.cart.totalBill);
  console.log("", cartItems);
  return (
    <>
      <Text>{totalBill}</Text>
      {cartItems.map((item: any) => {
        return (
          <>
            <CartItem
              title={item.title}
              id={item.id}
              price={item.price}
              image={item.thumbnail}
              quantity={item.quantity}
            />
          </>
        );
      })}
    </>
  );
}

export default Cart;
