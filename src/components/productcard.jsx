import React from "react";
//ximport { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };

  const rootid = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootid}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full xs:h-48 h-96 overflow-hidden cursor-pointer"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={product.image}
          alt=""
        />
      </div>
      <div className="w-full border-[1px] border-white px-2 py-4 hover:border-gray-300 duration-300">
        <div className="flex flex-row justify-between">
          <div className="xs:w-1/2">
            <h2 className="font-titleFont tetx-base font-bold xs:text-sm">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex gap-2 xs:gap-1 relative overflow-hidden w-28 justify-end xs:text-xs text-sm">
            <div className="flex gap-2 xs:gap-1 transform group-hover:translate-x-24 transition-transform duration-500 xs:text-xs text-sm">
              <p className=" text-gray-400 line-through ">
                ${product.oldPrice}
              </p>
              <p className=" font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} Added to Cart`)
              }
              className="absolute xs:text-xs text-sm text-gray-500 hover:text-gray-900 z-20 w-[100px] flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0  transition-transform cursor-pointer duration-500 "
            >
              Add to Cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between text-sm font-thin">
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0 z-100">
          {product.isNew && (
            <p className=" bg-neutral-800 xs:text-xs text-white py-1 px-6 font-semibold font-titleFont">
              Sale
            </p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductCard;
