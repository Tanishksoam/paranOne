import React from "react";
import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://i.pinimg.com/originals/7a/e9/c2/7ae9c2c1b08863cdf8ba0114f6521dfd.jpg",
    "https://i.pinimg.com/originals/c1/fd/1b/c1fd1ba8c4dc953117103e2703ba829b.jpg",
    "https://i.pinimg.com/originals/0a/30/55/0a3055e7ae437712bf65907adc33982a.jpg",
    "https://i.pinimg.com/originals/f2/01/10/f201107b6f08feb54af7fdc4a673412c.jpg",
    "https://i.pinimg.com/originals/0b/21/2a/0b212a36f7f9dd4c7042eda94dca5f7e.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <div className="w-screen h-auto relative ">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[500vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImgOne"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImgOne"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImgOne"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[4]}
            alt="ImgOne"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-0">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px]  border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
