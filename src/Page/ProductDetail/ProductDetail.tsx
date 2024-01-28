import { Text, View } from "react-native";

function ProductDetail({ route }) {
  const { id } = route.params;

  // Fetch details for the item based on itemId

  return (
    <>
      <Text>{`Details Screen for Item ${id}`}</Text>
      {/* Display details for the item */}
    </>
  );
}

export default ProductDetail;
