import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { getProduct } from "../../Services/Product/product.service";
import Swiper from "react-native-swiper";
import { styles } from "./ProductDetail.style";
import StarRating from "../../Component/StarRating/StarRating";
import { addItem } from "../../Slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetail({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState<any>({});
  const [imgArray, setImgArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Fetch details for the item based on itemId
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      console.log("PDP IMG", product.images);
      setImgArray(product.images);
      setProduct(product);
      setIsLoading(true);
    };
    fetchProduct();
  }, [id]);
  const dispatch = useDispatch();
  return (
    <>
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        {isLoading && (
          <View
            style={{
              height: 400,
              width: "100%",
              backgroundColor: "white",
              marginVertical: 16,
            }}
          >
            <Text style={styles.productName}>{product.title}</Text>
            <StarRating value={product.rating} />
            <Swiper>
              {product.images.map((imageUri: string, index: number) => (
                <View style={styles.slide} key={index}>
                  <Image
                    source={{ uri: imageUri }}
                    alt="product-image"
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ))}
            </Swiper>
          </View>
        )}
        {/* Display details for the item */}

        <Text style={styles.price}>${product?.price?.toFixed(2)}</Text>

        <View style={styles.buttoncontainer}>
          <Button
            title="Add To Cart"
            type="outline"
            onPress={() => {
              dispatch(addItem(product));
              navigation.navigate("Cart", { id });
            }}
            buttonStyle={styles.outLineButton}
          />
          <Button
            title="Buy Now"
            type="solid"
            buttonStyle={styles.primaryButton}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, color: "#1E222B", margin: 16 }}>
            Details
          </Text>
          <Text
            style={{ fontSize: 16, color: "#8891A5", marginHorizontal: 16 }}
          >
            {product.description}
          </Text>
        </View>
      </View>
    </>
  );
}

export default ProductDetail;
