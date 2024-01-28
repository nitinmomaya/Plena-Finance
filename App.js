import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HomeScreenPage from "./src/Page/HomeScreen";
import { getAllProducts } from "./src/Services/Product/product.service";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreenPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "center",
  },
});
