import React from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./ProductCard.style";

function ProductCard({ price, name, image }) {
  return (
    <SafeAreaView>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: image }}
          alt="product-image"
          style={styles.proImage}
        />

        <View>
          <View>
            <Text>${price}</Text>
            <Text>{name}</Text>
          </View>
          <View>
            <Button title={"ADD"}></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProductCard;
