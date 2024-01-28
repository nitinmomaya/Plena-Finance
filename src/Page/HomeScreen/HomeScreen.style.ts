import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 16,
    paddingLeft: 16,
    backgroundColor: "#153075",
    borderRadius: 28,
    padding: 10,
    color: "#fff",
  },

  headerContainer: {
    width: "100%",
    marginTop: 36,
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#2A4BA0",
  },
  deliveryInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    color: "black",
  },
  content: {
    flex: 1, // Distribute available space equally among items
    flexDirection: "column",
    height: 40,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});
