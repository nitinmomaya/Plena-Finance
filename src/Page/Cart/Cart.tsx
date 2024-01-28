import React from "react";
import { ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Component/CartItem/CartItem";
import CheckoutBill from "./CheckoutBill";

function Cart({ route }) {
  const { id } = route.params;
  const cartItems = useSelector((state: any) => state.cart.items);

  const totalBill = useSelector((state: any) => state.cart.totalBill);
  return (
    <>
      <ScrollView style={{ backgroundColor: "#fff" }}>
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
        {totalBill !== 0 && <CheckoutBill />}
      </ScrollView>
    </>
  );
}

export default Cart;
