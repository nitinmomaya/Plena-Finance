import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenPage from "../Page/HomeScreen";
import ProductDetail from "../Page/ProductDetail/ProductDetail";
import Cart from "../Page/Cart/Cart";
import { useSelector } from "react-redux";
import CustomHeaderTitle from "./CustomHeaderTitle";

const Stack = createStackNavigator();
export type CartScreenParams = {
  totalItems?: number;
};

const Route = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreenPage} />
      <Stack.Screen
        name="Details"
        component={ProductDetail}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ route }) => ({
          title: cartItems
            ? `Shopping Cart (${cartItems.length} items)`
            : "Shopping Cart",
        })}
      />
    </Stack.Navigator>
  );
};

export default Route;
