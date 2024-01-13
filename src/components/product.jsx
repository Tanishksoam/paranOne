import React from "react";
import ProductCard from "./productcard";

const Product = ({ products }) => {
  return (
    <div className="py-10 px-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 text-center w-80 ">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <h2 className="text-md text-gray-700 font-light">Shop Now</h2>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quis
          atque delectus maxime soluta iure, eius quae fuga quidem in culpa
          aliquid a laborum accusamus perferendis quod. Dolor, id! Rem.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-4  gap-10">
        {products.map((items) => (
          <ProductCard key={items._id} product={items} />
        ))}
      </div>
    </div>
  );
};

export default Product;
