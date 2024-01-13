import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { banner } from "../assets";
import CartItem from "../components/cartItem";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Carts = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.UserInfo);

  const [totalAmt, setTotalAmt] = React.useState(0);
  const [payNow, setPayNow] = React.useState(false);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Login First!");
    }
  };
  // console.log(productData);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      price = Math.round(price * 100) / 100;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt,
      token: token,
    });
  };
  return (
    <div>
      <img
        className="w-full h-60 overflow-hidden object-cover"
        src={banner}
        alt=""
      />
      <div className=" max-w-screen-xl mx-auto py-20 px-10 flex xs:flex-col">
        <CartItem />
        <div className="xs:w-full w-1/3 bg-[#eeeeee] py-6 px-4">
          <div className=" flex flex-col gap-6 border-b-[2px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex item-center gap-4 text-base ">
              Subtotal{" "}
              <span className=" font-titleFont font-bold text-lg">
                ${totalAmt}
              </span>
            </p>
            <p className="flex item-center gap-4 text-base ">
              Shipping{" "}
              <span className=" font-bodyFont text-sm font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, quisquam.
              </span>
            </p>
          </div>
          <p className=" font-titleFont font-semibold flex justify-between mt-4">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button
            onClick={handleCheckOut}
            className="w-full bg-[#000] text-white py-4 mt-4"
          >
            Proceed To Checkout
          </button>
          {
            payNow && (
              <div className=" w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  token={(token) => console.log(token)}
                  stripeKey="pk_live_51OTjgySI7D8yzk3R8f3lbmamgt9l8jZbYkNkWx7MQwKHaCTL1opndVh127ndaV04BlQrj99ZDuQvryQEmpcpBbpG00pcQ8HAbQ"
                  name="Bazar Online Shoping"
                  amount={totalAmt * 100}
                  label="Pay to bazar"
                  description={`Your total amount is ${totalAmt}`}
                  // token= {token}
                  email={userInfo.email}
                />
              </div>
            )
            // <Elements stripe={stripePromise}>
            //   <CheckoutForm />
            // </Elements>
          }
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

export default Carts;
