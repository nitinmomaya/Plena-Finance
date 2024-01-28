import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Route from "./src/Route/Route";
import { Provider } from "react-redux";
import store from "./src/Store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "center",
  },
});
