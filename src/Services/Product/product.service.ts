import axios from "axios";
import { GET_ALL_PRODUCTS, PRODUCT_DETAIL } from "../../Constant/constant";
export const getAllProducts = async () => {
  try {
    const response = await axios.get(GET_ALL_PRODUCTS);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${PRODUCT_DETAIL}/${id}`);
    console.log("PD,", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
