import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeLoader } from "../redux/bazarSlice";
import { useEffect } from "react";
export default async function ProductData() {
  let products = "";
  products = await axios
    .get("https://fakestoreapiserver.reactbd.com/products")
    .catch((err) => {
      console.log(err);
    });
  return products;
}

export function ApiComp() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await ProductData();
        // Assuming you want to dispatch the action when the data is fetched
        if (products.status === 200) {
          dispatch(removeLoader());
        }
        // removeLoader({payload:false});
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  },[]);

  return <></>; // Your component JSX
}
