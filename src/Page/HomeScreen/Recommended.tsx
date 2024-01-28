import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { getAllProducts } from "../../Services/Product/product.service";
import { styles } from "./HomeScreen.style";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { TouchableOpacity } from "react-native-gesture-handler";

function Recommended({ navigation }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      console.log("DATA", products);
      setProductList(products.products);
    };
    fetchData();
  }, []);

  console.log("PRo", productList);
  return (
    <SafeAreaView>
      <Text style={{ marginHorizontal: 16 }}>Recommended</Text>

      <View style={styles.scrollContainer}>
        {productList.map((item) => {
          return (
            <>
              <View style={{ width: "48%" }} key={item?.id}>
                <ProductCard
                  navigation={navigation}
                  item={item}
                  id={item?.id}
                  price={item?.price}
                  name={item?.title}
                  image={item?.thumbnail}
                />
              </View>
            </>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default Recommended;
