import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { addToCart } from "../redux/bazarSlice";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
const Eproduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [details, setDetails] = useState({});
  let [baseQuantity, setBaseQuantity] = useState(1);
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto my-10 flex xs:flex-col xs:px-2 gap-10">
        <div className=" xs:w-full w-2/5  relative">
          <img
            className="w-full object-cover h-[550px]"
            src={details.image}
            alt="product image"
          />
          <div className="absolute top-4 right-0 z-100">
            {details.isNew && (
              <p className=" bg-neutral-800 text-white py-1 px-6 font-semibold font-titleFont">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className=" xs:w-full w-3/5 xs:px-3 flex flex-col gap-12 justify-center">
          <div>
            <h1 className="text-4xl font-semibold">{details.title}</h1>
            <div className="flex gap-4 mt-4 items-center">
              <p className=" text-gray-400 font-base line-through ">
                ${details.oldPrice}
              </p>
              <p className=" text-2xl font-medium">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-sm text-gray-500">(1 Customer Review)</p>
          </div>
          <p className="text-md text-gray-600 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className=" w-52 flex text-gray-400 justify-between items-center gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQuantity(
                      baseQuantity === 1 ? (baseQuantity = 1) : baseQuantity - 1
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  onClick={() => setBaseQuantity(baseQuantity + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} added to cart`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-700"
            >
              {" "}
              add to cart
            </button>
          </div>
          <p className=" text-sm font-thin text-gray-500 gap-3">
            Category:{" "}
            <span className="capitalize text-lg">
              {" "}
              &nbsp;{details.category}
            </span>
          </p>
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

export default Eproduct;
