import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkoutContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
  },
  label: { fontSize: 14, color: "#616A7D" },
  value: { fontSize: 14, color: "#1E222B", fontWeight: "600" },
});
