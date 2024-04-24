const Product = ({ title, img, details }) => {
  return (
    <article className="article-hover relative max-h-[400px] max-w-[523px]">
      <img loading="lazy" src={img} className="w-full" />
      <div className="flex absolute bottom-6 left-6 flex-col">
        <div className="text-3xl font-semibold text-pink-50">{title}</div>
        <div className="product-hover z-20 flex gap-36 hover:text-red-500 hover:cursor-pointer items-center mt-5 text-base text-zinc-400">
          {details}
          <img
            src="/icons/icon-leftarrow.png"
            className="w-6 transition-all duration-500"
            alt="arrow icon"
          />
        </div>
      </div>
      <span className="overlay absolute z-10 inset-0 bg-white transition-opacity duration-1000 opacity-0"></span>
    </article>
  );
};

export default Product;
