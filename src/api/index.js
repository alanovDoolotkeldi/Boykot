import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/Product/ProductSlice";

const ProductFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/v1/products")
      .then((response) => {
        dispatch(setProduct(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  return null; // Этот компонент не рендерит ничего, он только для получения данных
};

export default ProductFetcher;