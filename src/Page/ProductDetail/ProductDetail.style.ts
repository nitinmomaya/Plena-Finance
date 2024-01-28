import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  productName: {
    fontSize: 50,
    fontWeight: "300",
    marginHorizontal: 16,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 600,
  },
  price: {
    fontSize: 16,
    color: "#2A4BA0",
    margin: 16,
  },

  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: 16, // Adjust the width of the container as needed
  },
  primaryButton: {
    width: "80%",

    borderRadius: 20,
    backgroundColor: "#2A4BA0",
  },
  outLineButton: {
    width: "80%",
    borderRadius: 20,

    color: "#2A4BA0",
    borderColor: "#2A4BA0",
  },
});
