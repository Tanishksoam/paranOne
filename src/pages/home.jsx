import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import Product from "../components/product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Product products={products} />
    </div>
  );
};

export default Home;
