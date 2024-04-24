const Blog = () => {
  return (
    <>
      <section className="hidden lg:block  my-6">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/images/blog-1.png"
              className="grow w-full aspect-[1.69] max-md:mt-4 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 mt-3 max-md:mt-7 max-md:max-w-full">
              <div className="text-3xl font-semibold text-zinc-900 max-md:max-w-full">
                New to photography? Let us help!
              </div>
              <div className="mt-2.5 text-base text-zinc-900 max-md:max-w-full">
                We offer a variety of written & recorded guides for all aspects
                of photography, ranging from equipment handling to artistic
                theory.
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm font-light text-neutral-500 max-md:mt-6">
                      <div className="flex gap-3.5 self-start ml-3 max-md:ml-2.5">
                        <img
                          loading="lazy"
                          src="/icons/icon-search.png"
                          className="shrink-0 aspect-square fill-red-500 w-[18px]"
                        />
                        <input type="text" placeholder="Search guides" />
                      </div>
                      <img
                        loading="lazy"
                        src="/images/blog-2.png"
                        className="mt-7 w-full aspect-[1.82]"
                      />
                      <img
                        loading="lazy"
                        src="/images/blog-3.png"
                        className="mt-3.5 w-full aspect-[1.82]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-14 text-base text-zinc-900 max-md:mt-10">
                      <div className="text-xl font-medium">Image Editing</div>
                      <div className="mt-2.5">
                        Learn the basics of Adobe Lightroom and elevate your
                        photos to a new standard.
                      </div>
                      <div className="flex gap-2.5 items-center hover:text-red-500 hover:cursor-pointer self-start mt-9 text-neutral-500">
                        <div className="grow">Read More</div>
                        <img
                          loading="lazy"
                          src="/icons/icon-leftarrow.png"
                          className=" hover:-translate-x-2 transition  w-4 aspect-square"
                        />
                      </div>
                      <div className="shrink-0 w-28 h-px bg-neutral-500" />
                      <div className="mt-8 text-xl font-medium">
                        Composition
                      </div>
                      <div className="mt-2.5">
                        Master the art of creating visually appealing
                        photography that tells a story, with practical tips and
                        examples.
                      </div>
                      <div className="flex gap-2.5 items-center  hover:text-red-500 hover:cursor-pointer self-start mt-6 text-neutral-500">
                        <div className="grow ">Read More</div>
                        <img
                          loading="lazy"
                          src="/icons/icon-leftarrow.png"
                          className=" hover:-translate-x-2 transition  w-4 aspect-square"
                        />
                      </div>
                      <div className="shrink-0 w-28 h-px bg-neutral-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lg:hidden my-4 flex flex-col px-5 text-base font-light mx-auto max-w-[520px] text-zinc-900">
        <div className="w-full text-xl font-medium">
          New to photography? Let us help!
        </div>
        <div className="mt-2.5 w-full">
          We offer a variety of written & recorded guides for all aspects of
          photography.
        </div>
        <div className="flex justify-between gap-5 px-5 py-3.5 mt-4 w-full text-center bg-gray-200">
          <input
            type="text"
            className="bg-inherit"
            placeholder="Search guides"
          />
          <img
            loading="lazy"
            src="/icons/icon-search.png"
            className="shrink-0 self-start aspect-square fill-red-500 w-[18px]"
          />
        </div>
        <img
          loading="lazy"
          src="/images/blog-2.png"
          className="self-start mt-3 w-full aspect-[2.86]"
        />
        <div className="mt-3.5 w-full text-lg">Image editing </div>
        <div className="mt-2.5 w-full">
          Learn the basics of Adobe Lightroom and elevate your photos to a new
          standard.
        </div>
        <div className="flex gap-1.5 self-start mt-3 text-right text-neutral-500">
          <div className="grow">Read More</div>
          <img
            loading="lazy"
            src="/icons/icon-leftarrow.png"
            className="shrink-0 self-start w-3 aspect-square fill-red-500"
          />
        </div>
        <div className="shrink-0 mt-1.5 h-px bg-neutral-500 w-[101px]" />
        <img
          loading="lazy"
          src="/images/blog-3.png"
          className="self-start mt-8 w-full aspect-[2.86]"
        />
        <div className="mt-3 w-full text-lg">Composition</div>
        <div className="mt-2.5 w-full">
          Master the art of creating visually appealing photography that tells a
          story, with practical tips & examples.
        </div>
        <div className="flex gap-1.5 self-start mt-3 text-right text-neutral-500">
          <div className="grow">Read More</div>
          <img
            loading="lazy"
            src="/icons/icon-leftarrow.png"
            className="shrink-0 self-start w-3 aspect-square fill-red-500"
          />
        </div>
        <div className="shrink-0 mt-1.5 h-px bg-neutral-500 w-[101px]" />
      </section>
    </>
  );
};

export default Blog;
