const ProductCard = ({
  img,
  name,
  time,
  brand,
  rating,
  oldPrice,
  features,
  newPrice,
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col grow shrink-0 self-start px-5 basis-0 w-fit">
        <div className="flex overflow-hidden relative flex-col items-end px-16 pt-3.5 pb-20 w-full aspect-[1.01]">
          <img
            loading="lazy"
            src={img}
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
        <div className="flex gap-5 justify-between mt-2 w-full">
          <div className="flex flex-col text-zinc-900">
            <div className="text-xl font-medium">{name}</div>
            <div className="text-base">{brand}</div>
          </div>
          <div className="flex gap-1.5 items-center self-start text-base whitespace-nowrap text-neutral-500">
            <img loading="lazy" src="/icons/star.png" className="w-3 h-3" />
            <div>{rating / 10}</div>
          </div>
        </div>
        <div className="mt-4 text-sm font-light text-neutral-500">
          <ul>
            {features.map((f, i) => (
              <li className="list-disc" key={i}>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="self-end line-through text-gray-400">${oldPrice}</div>
        <div className="flex gap-5  justify-between w-full text-zinc-900">
          <div className="flex items-center gap-2 text-base">
            <img loading="lazy" src="/icons/time.png" className="w-4  h-4" />
            <div className="my-auto">{time}</div>
          </div>
          <div className="text-xl font-medium text-right">${newPrice}</div>
        </div>
      </div>
      <div className="shrink-0 w-px bg-zinc-400 h-[443px]" />
    </div>
  );
};

export default ProductCard;
