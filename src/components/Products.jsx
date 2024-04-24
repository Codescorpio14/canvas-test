import Product from "./Product";

const Products = () => {
  const products = [
    {
      img: "/images/product-1.png",
      title: "Cameras",
      details: "Browse Through Our selection of cameras",
    },
    {
      img: "/images/product-2.png",
      title: "Lenses",
      details: "Find the sharpest lense for your photoshoot",
    },
    {
      img: "/images/product-3.png",
      title: "Accessories",
      details: "Highest quality accessories to lift your gear",
    },
  ];

  const productsMobile = [
    {
      img: "/images/product-1.png",
      title: "Cameras",
    },
    {
      img: "/images/product-2.png",
      title: "Lenses",
    },
    {
      img: "/images/product-3.png",
      title: "Accessories",
    },
    {
      img: "/images/product-4.png",
      title: "Studio",
    },
  ];

  const productElm = products.map((product) => (
    <Product key={product.title} {...product} />
  ));

  const mobileElm = productsMobile.map((product) => (
    <div className="max-w-36" key={product.title}>
      <img
        loading="lazy"
        src={product.img}
        className="shrink-0 w-40 max-w-full aspect-square"
      />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-2xl">{product.title}</h3>
        <img src="/icons/icon-leftarrow.png" alt="" />
      </div>
    </div>
  ));

  return (
    <>
      <div className="hidden lg:flex justify-between gap-5 my-16">
        {productElm}
      </div>

      <div className="flex lg:hidden flex-wrap gap-4 p-4 min-w-[340px]">
        {mobileElm}
      </div>
    </>
  );
};

export default Products;
