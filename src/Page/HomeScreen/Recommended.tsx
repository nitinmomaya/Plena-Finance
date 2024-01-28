import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { getAllProducts } from "../../Services/Product/product.service";
import { styles } from "./HomeScreen.style";
import ProductCard from "../../Component/ProductCard/ProductCard";

function Recommended() {
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
              <View style={{ width: "48%" }}>
                <ProductCard
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
