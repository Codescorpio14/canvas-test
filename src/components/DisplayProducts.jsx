import { useState } from "react";
import ProductCard from "./ProductCard";

const DisplayProducts = () => {
  const products = [
    {
      img: "/images/dis-1.png",
      name: "EOS R5",
      brand: "Canon",
      rating: 46,
      features: [
        "45MP Full-Frame CMOS Sensor",
        "Sensor-Shift image Stabilization",
        "DIGIC X Image Processor",
        "8K30 Raw Video",
      ],
      time: "2h 27m",
      oldPrice: 3899,
      newPrice: 3699,
    },
    {
      img: "/images/dis-2.png",
      name: "Mavic 3 ",
      brand: "DJI",
      rating: 47,
      features: [
        ' 20MP 4/3" CMOS Hasselblad',
        "4K Slow Motion at 120 fps",
        "f/2.8 to f/11 Adjustable Aperture",
        "DJI RC Remote Included",
      ],
      time: "21h 3m",
      oldPrice: 1740,
      newPrice: 1599,
    },
    {
      img: "/images/dis-3.png",
      name: "Carbon Fiber Tripod",
      brand: "Benro",
      rating: 42,
      features: [
        " Load Capacity: 26.4 lb",
        'Max Height: 64.2"',
        ' Min Height: 16.1"',
        ' Folded Length: 16.1"',
      ],
      time: "3h 35m",
      oldPrice: 360,
      newPrice: 319,
    },
    {
      img: "/images/dis-4.png",
      name: "Hero 11 Black Mini",
      brand: "GoPro",
      rating: 44,
      features: [
        " 24.7MP Improved Performance",
        "Smooth 5.0 Image Stabilization",
        "8x Slow-Motion Video",
        "5.3K60/2.7K240 Video",
      ],
      time: "7h 38m",
      oldPrice: 349,
      newPrice: 289,
    },
  ];

  const productElm = products.map((product) => (
    <ProductCard key={product.name} {...product} />
  ));

  const [unit, setUnit] = useState(1);

  return (
    <div className="flex justify-between gap-5 my-12 max-w-full lg:overflow-auto overflow-x-scroll">
      <div>
        <div className="flex flex-col max-w-[254px]">
          <div className="flex overflow-hidden relative flex-col items-end px-16 pt-3.5 pb-20 w-full h-[12rem] aspect-[1]">
            <img
              loading="lazy"
              src="/images/sp-1.png"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="absolute items-center gap-2 top-2 right-0 flex">
              <img
                loading="lazy"
                src="/icons/heart.png"
                className="aspect-square"
              />
              <img
                loading="lazy"
                src="/icons/double-arrow.png"
                className="aspect-square "
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between px-0.5 w-full">
            <div className="flex flex-col px-5 text-zinc-900">
              <div className="text-xl font-medium">2 Lens kit</div>
              <div className=" text-base">Canon </div>
            </div>
            <div className="flex items-center gap-1.5 self-start px-5 text-base whitespace-nowrap text-neutral-500">
              <img
                loading="lazy"
                src="/icons/star.png"
                className="shrink-0 w-3 aspect-square fill-red-500"
              />
              <div>4.8</div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-2 w-full text-base font-light text-right bg-white rounded-2xl">
            <div className="flex gap-3 justify-between   rounded-3xl border border-solid border-neutral-500">
              <button
                onClick={() => setUnit(1)}
                className={`justify-center px-11 py-3  ${
                  unit === 1 ? "bg-red-500 text-white" : "text-black"
                } rounded-2xl`}
              >
                1 Lens
              </button>
              <button
                onClick={() => setUnit(2)}
                className={`rounded-2xl px-8 justify-center py-3  ${
                  unit === 2 || unit > 2
                    ? "bg-red-500 text-white"
                    : "text-black"
                }`}
              >
                2 Lens
              </button>
            </div>
          </div>

          <div className="flex gap-5 justify-between  py-px mt-3.5 w-full text-base text-right text-pink-50 whitespace-nowrap bg-white border border-solid border-neutral-500 rounded-[32px]">
            <button
              onClick={() => setUnit((p) => Math.max(p - 1, 1))}
              className="justify-center items-start hover:bg-red-600 px-6 py-4 bg-red-500 rounded-[32px_0px_0px_32px]"
            >
              -
            </button>
            <div className="self-start mt-3 text-xl text-center text-zinc-900">
              {unit}
            </div>
            <button
              onClick={() => setUnit((p) => p + 1)}
              className="justify-center items-start px-6 hover:bg-red-600 py-3.5 bg-red-500 rounded-[0px_32px_32px_0px]"
            >
              +
            </button>
          </div>
          <div className="flex gap-5 justify-between px-5 mt-5 w-full text-zinc-900">
            <div className="flex gap-2 items-center text-base">
              <img
                loading="lazy"
                src="/icons/time.png"
                className="shrink-0 w-4 h-4 "
              />
              <div className="my-auto">17h 31m</div>
            </div>
            <div className="text-xl font-medium text-right">${1799 * unit}</div>
          </div>
        </div>
      </div>
      <div className="shrink-0 w-px bg-zinc-400 h-[443px]" />
      {productElm}
    </div>
  );
};

export default DisplayProducts;
