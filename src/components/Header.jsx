import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [miniNav, setMiniNav] = useState(false);

  return (
    <header>
      <section id="top" className="hidden  lg:block">
        <div className="flex justify-center items-center px-16 pt-6 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1635px] max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full h-7">
              <img
                loading="lazy"
                src="/icons/logo-lg.png"
                className="shrink-0 max-w-full aspect-[3.85] w-[116px]"
              />
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="/icons/icon-user.png"
                  className="hover:invert"
                />
                <img
                  loading="lazy"
                  src="/icons/icon-cart.png"
                  className="hover:invert"
                />
                <img
                  loading="lazy"
                  src="/icons/icon-search.png"
                  className="hover:invert"
                />
              </div>
            </div>
            <nav>
              <ul className="uppercase text-center flex justify-between mt-4 text-xl font-medium text-white">
                <li className="hover:bg-red-500 py-8 w-full transition">
                  Brands
                </li>
                <li
                  onMouseEnter={() => setVisible(true)}
                  className="hover:bg-red-500 py-8 w-full transition"
                >
                  Cameras
                </li>
                <li className="hover:bg-red-500 py-8 w-full transition">
                  Lenses
                </li>
                <li className="hover:bg-red-500 py-8 w-full transition">
                  Accessories
                </li>
                <li className="hover:bg-red-500 py-8 w-full transition">
                  Studio
                </li>
                <li className="hover:bg-red-500 py-8 w-full transition">
                  Extreme
                </li>
                <li className="hover:bg-red-500 py-8 w-full transition">
                  Used
                </li>
              </ul>

              {visible && (
                <div
                  onMouseLeave={() => setVisible(false)}
                  className="absolute inset-x-0 top-30 z-30 bg-pink-50 py-12 mx-auto"
                >
                  <div className="flex justify-between max-w-4xl mx-auto">
                    <div>
                      <h1 className="underline text-xl uppercase mb-2 font-semibold">
                        Digital
                      </h1>
                      <p>DSLR</p>
                      <p>Mirrorless</p>
                      <p>Compact</p>
                      <p>Medium Format</p>
                    </div>
                    <div>
                      <h1 className="underline text-xl uppercase mb-2 font-semibold">
                        Film
                      </h1>
                      <p>35mm</p>
                      <p>Medium Format</p>
                      <p>Large Format</p>
                      <p>Instant</p>
                      <p>Disposable</p>
                    </div>
                    <div>
                      <h1 className="underline text-xl uppercase mb-2 font-semibold">
                        Video
                      </h1>
                      <p>Camcorder</p>
                      <p>Pro-Consumer</p>
                      <p>Super CLip</p>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </section>

      <section className="flex bg-zinc-900 overflow-hidden  justify-between px-4 py-4  lg:hidden">
        <img
          onClick={() => setMiniNav(true)}
          src="/icons/icon-hamburger.png"
          loading="lazy"
          alt="logo"
          className="hover:cursor-pointer"
        />
        <img src="/icons/logo.png" loading="lazy" alt="logo" />
        <div className="flex gap-4 items-center">
          <img src="/icons/icon-cart.png" loading="lazy" alt="logo" />
          <img src="/icons/icon-search.png" loading="lazy" alt="logo" />
        </div>

        {miniNav && (
          <article
            onMouseLeave={() => setMiniNav(false)}
            className="absolute z-40 left-0 top-0 max-h-screen flex flex-col justify-center  text-pink-50 max-w-[180px]"
          >
            <div className="flex flex-col items-center px-5 py-9 w-full bg-zinc-900">
              <ul className="gap-8 flex flex-col border-b border-gray-400 pb-8">
                <li>BRANDS</li>
                <li>CAMERAS</li>
                <li>LENSES</li>
                <li>ACCESSORIES</li>
                <li>STUDIO</li>
                <li>EXTREME</li>
                <li>USED</li>
              </ul>

              <div className="flex  gap-2 mt-20 items-center font-light">
                <img
                  loading="lazy"
                  src="/icons/icon-user.png"
                  className=" aspect-[0.74] w-[12px]"
                />
                <button>My Account</button>
              </div>
              <div className="flex gap-2 items-center mt-5 font-light">
                <img
                  loading="lazy"
                  src="/icons/logout.png"
                  className="  aspect-square w-[12px]"
                />
                <button>Sign Out</button>
              </div>
            </div>
          </article>
        )}
      </section>
    </header>
  );
};

export default Header;
