import { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    {
      img: 0,
      title: "Make Believe",
      detail: "Sales on selected SONY Products",
    },
    {
      img: 1,
      title: "Picture Perfect Deals",
      detail: "Browse our Second-hand gear market",
    },
    {
      img: 2,
      title: "New Arrivals",
      detail: "The newest and latest advances in technology",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative  overflow-hidden ">
      <img
        className="snap-item w-full h-full object-cover"
        src={`/images/slider-${images[currentSlide].img}.png`}
      />

      <div className="absolute left-4 bottom-4 lg:left-24 backdrop-blur-sm rounded-md text-bg lg:bottom-20 text-white">
        <h2 className="text-xl lg:text-7xl font-bold uppercase mb-5">
          {images[currentSlide].title}
        </h2>
        <div className="flex gap-8">
          <p className="lg:text-xl">{images[currentSlide].detail}</p>
          <img src="/icons/icon-leftarrow.png" className="w-8" alt="arrow" />
        </div>
      </div>

      <div className="absolute bottom-4 gap-5 flex justify-center items-center w-full py-2">
        <button
          onClick={() => handleSlideChange(0)}
          className={` hover:bg-red-500 block ${
            currentSlide === 0 && "bg-red-500"
          }  aspect-square rounded-[50%] w-4 border border-white`}
        ></button>
        <button
          onClick={() => handleSlideChange(1)}
          className={` hover:bg-red-500 block ${
            currentSlide === 1 && "bg-red-500"
          } aspect-square rounded-[50%] w-4 border border-white`}
        ></button>
        <button
          onClick={() => handleSlideChange(2)}
          className={` hover:bg-red-500 block ${
            currentSlide === 2 && "bg-red-500"
          } aspect-square rounded-[50%] w-4 border border-white`}
        ></button>
      </div>
    </div>
  );
};

export default Slider;
