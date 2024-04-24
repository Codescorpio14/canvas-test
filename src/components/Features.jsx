const Features = () => {
  return (
    <>
      <section className="mb-16 mt-12 hidden lg:block">
        <h2 className="text-2xl font-semibold mb-4">Featured Savings</h2>
        <div className="flex gap-12 justify-between items-center">
          <article>
            <img src="/images/features-1.png" alt="photo" className="h-full" />
          </article>

          <article>
            <div className="flex flex-col px-5 max-w-[878px]">
              <div className="w-full text-3xl font-semibold text-zinc-900 max-md:max-w-full">
                Turn used gear into new possibilities
              </div>
              <div className="mt-6 w-full text-base text-zinc-900 max-md:max-w-full">
                We offer a reliable platform for buying and selling used
                photography gear. Whether you're a beginner looking for
                affordable equipment or a professional photographer in search of
                high-end gear at a discounted price, we've got you covered.{" "}
              </div>
              <div className="mt-14 w-full text-xl font-medium text-zinc-900 max-md:mt-10 max-md:max-w-full">
                Top sellers this month
              </div>
              <div className="mt-3 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm font-light max-md:mt-3">
                      <div className="flex gap-2 text-zinc-900">
                        <img
                          loading="lazy"
                          src="/images/features-2.png"
                          className="shrink-0 aspect-square w-[75px]"
                        />
                        <div className="flex flex-col my-auto">
                          <div className="text-base font-semibold">
                            Tom Smith
                          </div>
                          <div className="mt-3.5">Handmade Accessories</div>
                          <div className="flex gap-1.5 mt-3 text-neutral-500">
                            <img
                              loading="lazy"
                              src="/icons/icon-tick.png"
                              className="shrink-0 aspect-square w-[15px]"
                            />
                            <div className="flex-auto">PIXEL Verified</div>
                          </div>
                        </div>
                      </div>
                      <ul className="mt-5 text-neutral-500">
                        <li> Camera Bags</li>
                        <li> Grips & Rigs</li>
                        <li> Professional Straps</li>
                      </ul>
                      <div className="flex gap-5 justify-between mt-16 text-xl font-medium whitespace-nowrap max-md:mt-10">
                        <button className="justify-center hover:bg-red-600 transition px-14 py-2 text-pink-50 bg-red-500 max-md:px-5">
                          BUY
                        </button>
                        <button className="justify-center transition hover:bg-red-500 hover:text-white px-14 py-2 border-2 border-solid border-neutral-500 text-neutral-500 max-md:px-5">
                          SELL
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-sm font-light max-md:mt-3 max-md:max-w-full">
                      <div className="flex gap-5 w-full text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-1 gap-2">
                          <img
                            loading="lazy"
                            src="/images/features-3.png"
                            className="shrink-0 aspect-square w-[75px]"
                          />
                          <div className="flex flex-col my-auto">
                            <div className="text-base font-semibold">
                              Emily Wong
                            </div>
                            <div className="mt-2.5">Optics Enthusiast</div>
                            <div className="flex gap-1.5 mt-2 text-neutral-500">
                              <img
                                loading="lazy"
                                src="/icons/icon-tick.png"
                                className="shrink-0 aspect-square w-[15px]"
                              />
                              <div>PIXEL Verified</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 gap-2">
                          <img
                            loading="lazy"
                            src="/images/features-4.png"
                            className="shrink-0 aspect-square w-[75px]"
                          />
                          <div className="flex flex-col my-auto">
                            <div className="text-base font-semibold">
                              George Duke
                            </div>
                            <div className="mt-2.5">Vintage Collector</div>
                            <div className="flex gap-1.5 mt-2 text-neutral-500">
                              <img
                                loading="lazy"
                                src="/icons/icon-tick.png"
                                className="shrink-0 aspect-square w-[15px]"
                              />
                              <div>PIXEL Verified</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 justify-between mt-4 text-neutral-500 max-md:flex-wrap max-md:max-w-full">
                        <div>
                          Unique Lenses
                          <br />
                          ND & UV Filters
                          <br />
                          Special Effect Filters
                          <br />
                          Lens Accessories
                        </div>
                        <div>
                          60s & 70s Film Cameras
                          <br />
                          Old Prints
                          <br />
                          Disposables
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="lg:hidden flex flex-col p-6 max-w-[520px] mx-auto my-12">
        <div className="w-full text-xl font-medium text-zinc-900">
          Used gear to new possibilities
        </div>
        <div className="mt-2.5 w-full text-base font-light text-zinc-900">
          We offer a reliable platform for buying and selling used photography
          gear.
        </div>
        <img
          loading="lazy"
          src="/images/features-1.png"
          className="mt-2.5 w-full aspect-[1.85]"
        />
        <div className="mt-4 w-full text-lg text-zinc-900">
          Top sellers this month
        </div>
        <div className="flex gap-2.5 mt-3.5">
          <img
            loading="lazy"
            src="/images/features-2.png"
            className="shrink-0 aspect-square w-[53px]"
          />
          <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
            <div className="flex gap-5 px-0.5 w-full">
              <div className="text-lg text-zinc-900">Tom Smith</div>
              <div className="flex flex-1 gap-0.5 self-start text-base font-light text-neutral-500">
                <img
                  loading="lazy"
                  src="/icons/icon-tick.png"
                  className="shrink-0 aspect-square h-4 w-[13px]"
                />
                <div>PIXEL Verified</div>
              </div>
            </div>
            <div className="mt-3.5 text-base font-light text-zinc-900">
              Handmade Accessories
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-1">
          <img
            loading="lazy"
            src="/images/features-3.png"
            className="shrink-0 my-auto aspect-square w-[53px]"
          />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="flex gap-5 justify-between">
              <div className="flex flex-col">
                <div className="text-xs font-[275] text-neutral-500">
                  Camera Bags
                  <br />
                  Grips & Rigs
                </div>
                <div className="mt-10 text-lg text-zinc-900">Emily Wong</div>
              </div>
              <div className="flex flex-col self-start text-neutral-500">
                <div className="text-xs font-[275]">Professional Straps</div>
                <div className="flex gap-0.5 self-start mt-14 ml-5 text-base font-light">
                  <img
                    loading="lazy"
                    src="/icons/icon-tick.png"
                    className="shrink-0 aspect-square h-4 w-[13px]"
                  />
                  <div>PIXEL Verified</div>
                </div>
              </div>
            </div>
            <div className="flex gap-px mt-2">
              <div className="flex flex-col flex-1">
                <div className="text-base font-light text-zinc-900">
                  Optics Enthusiast
                </div>
                <div className="mt-2 text-xs font-[275] text-neutral-500">
                  Unique Lenses
                  <br />
                  ND & UV Filters
                </div>
              </div>
              <div className="mt-6 text-xs font-[275] text-neutral-500">
                Special Effect Filter
                <br />
                Lens Accessories
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-start mt-9">
          <img
            loading="lazy"
            src="/images/features-4.png"
            className="shrink-0 aspect-square w-[53px]"
          />
          <div className="flex flex-col grow shrink-0 mt-2 basis-0 w-fit">
            <div className="flex ">
              <div className="flex-auto text-lg text-zinc-900">George Duke</div>
              <div className="flex flex-1 gap-0.5 self-start text-base font-light text-neutral-500">
                <img
                  loading="lazy"
                  src="/icons/icon-tick.png"
                  className="shrink-0 aspect-square h-4 w-[13px]"
                />
                <div className="flex-auto">PIXEL Verified</div>
              </div>
            </div>
            <div className="mt-2 text-base font-light text-zinc-900">
              Vintage Collector
            </div>
            <div className="flex gap-1.5 mt-2 text-xs font-[275] text-neutral-500">
              <div>
                60s & 70s Cameras
                <br />
                Old Prints
              </div>
              <div className="flex-auto self-start">Disposables</div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-5 w-full text-base font-light text-center whitespace-nowrap">
          <button className="justify-center hover:bg-red-600 items-center px-16 py-1.5 text-pink-50 bg-red-500">
            BUY
          </button>
          <button className="justify-center items-center hover:bg-red-500 hover:text-white px-16 py-1.5 border border-solid border-neutral-500 text-neutral-500">
            SELL
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;
