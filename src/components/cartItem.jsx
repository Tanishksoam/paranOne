import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

// import { HiArrowOutlineLeft } from "react-icons/hi";
// import { HiArrowOutlineRight } from "react-icons/hi";

const CartItem = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.bazar.productData);
  const [quantAdded, setQuantAdded] = React.useState(1);
  console.log(productData);
  return (
    <div className="xs:w-full w-2/3 xs:pr-0 pr-10 flex flex-col gap-6">
      <div className=" w-full">
        <h2 className="text-2xl font-medium font-titleFont">Shopping Cart</h2>
        <div className="xs:overflow-scroll">
          {productData.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div className=" flex items-center justify-between gap-6">
                <MdOutlineClose
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &
                    toast.error("Item Deleted Successfully!")
                  }
                  className="text-xl text-gray-600 hover:text-red-500 cursor-pointer duration-300"
                />
                <img
                  src={item.image}
                  className="w-32 h-32 object-cover "
                  alt=""
                />
                <div className="w-32">
                  <p className=" font-bodyFont font-thin text-sm">
                    {item.title}{" "}
                  </p>
                </div>
                <div className="w-20">
                  <p> $ {item.price}</p>
                </div>
                <div className=" w-52 flex text-gray-400 justify-between items-center gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <button
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: item.quantity,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: item.quantity,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <h3 className="w-20">
                  $ {Math.round(item.price * item.quantity * 100) / 100}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full gap-3 justify-between">
        <button
          onClick={() =>
            dispatch(resetCart()) & toast.error("your cart is empty now!")
          }
          className="bg-black text-white py-3 px-6 active:bg-gray-700"
        >
          reset cart
        </button>
        <Link to="/">
          <button className="bg-black text-white py-3 px-6 active:bg-gray-700 ">
            go to shopping
          </button>
        </Link>
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

export default CartItem;
