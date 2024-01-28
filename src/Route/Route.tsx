import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenPage from "../Page/HomeScreen";
import ProductDetail from "../Page/ProductDetail/ProductDetail";
import Cart from "../Page/Cart/Cart";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
export type CartScreenParams = {
  totalItems?: number;
};

const Route = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreenPage} />
      <Stack.Screen name="Details" component={ProductDetail} options={{}} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ route }) => ({
          title: cartItems
            ? `Shopping Cart (${cartItems.length})`
            : "Shopping Cart",
        })}
      />
    </Stack.Navigator>
  );
};

export default Route;
