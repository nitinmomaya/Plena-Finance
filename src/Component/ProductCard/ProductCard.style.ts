import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  proImage: {
    width: "100%",
    height: 120, // Fixed height for the image container
    resizeMode: "stretch", // or 'contain' or 'stretch' or 'center'

    borderRadius: 4,
  },
  addButton: {
    borderRadius: 50,
  },
  cardContainer: {
    width: "100%",
    // 48% to allow for some spacing between items
    height: 200,
    backgroundColor: "#fff",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#EBEBFB",
  },
});
