import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCountProduct } from "../redux/CountSlice/CountSlice";

const CountFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/v1/products/count")
      .then((response) => {
        dispatch(setCountProduct(response.data.count));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product count:", error);
      });
  }, [dispatch]);

  return null; // This component does not render anything, it only fetches data
};

export default CountFetcher;
