const Footer = () => {
  return (
    <>
      <section className="hidden lg:flex flex-col justify-center">
        <div className="flex justify-center items-center px-16 py-6 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1600px] max-md:max-w-full">
            <div className="self-center w-full max-w-[1439px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="/images/map.png"
                    className="grow shrink-0 max-w-full aspect-[1.35] w-[219px] max-md:mt-8"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="flex justify-between gap-5 items-start text-xl font-medium text-pink-50 max-md:flex-wrap max-md:max-w-full">
                      <div>Come visit us!</div>
                      <div className="mr-12">
                        Join our newsletter for exclusive offers!
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between items-start mt-2 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex flex-col self-stretch text-base text-neutral-500">
                        <div className="flex gap-4">
                          <img
                            loading="lazy"
                            src="/icons/address.png"
                            className="shrink-0 self-start mt-1 w-6 aspect-[1.09] fill-red-500"
                          />
                          <div>
                            71 Park Lane, London
                            <br />
                            SW43 2LW
                          </div>
                        </div>
                        <div className="flex gap-5 mt-7">
                          <img
                            loading="lazy"
                            src="/icons/time.png"
                            className="shrink-0 my-auto w-5 aspect-square"
                          />
                          <div>
                            Sunday to Friday
                            <br />
                            8:00 - 21:00
                          </div>
                        </div>
                      </div>

                      <img
                        loading="lazy"
                        src="/icons/logo.png"
                        className="shrink-0 max-w-full aspect-[3.85] w-[100px]"
                      />

                      <div className="flex flex-col mt-3 max-md:max-w-full">
                        <div className="flex gap-2 text-sm font-light text-neutral-500 max-md:flex-wrap max-md:max-w-full">
                          <input
                            type="text"
                            className="px-8 py-2"
                            placeholder="Name"
                          />
                          <input
                            type="mail"
                            className="px-8 py-2"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="flex gap-5 self-start mt-4">
                          <img
                            loading="lazy"
                            src="/icons/insta.png"
                            className="shrink-0 my-auto aspect-[0.82] w-[23px]"
                          />
                          <img
                            loading="lazy"
                            src="/icons/facebook.png"
                            className="shrink-0 w-8 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="/icons/twitter.png"
                            className="shrink-0 self-start aspect-square w-[31px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 mt-8 bg-neutral-500 h-[3px] max-md:max-w-full" />
            <div className="flex gap-5 justify-between items-start mt-6 w-full text-base max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 justify-between self-stretch my-auto whitespace-nowrap text-neutral-500">
                <div className="flex flex-col">
                  <div className="text-xl font-medium text-pink-50">Shop</div>
                  <div className="mt-6">Cameras</div>
                  <div className="mt-6">Lenses</div>
                  <div className="mt-5">Accessories</div>
                </div>
                <div className="flex flex-col self-end mt-11 max-md:mt-10">
                  <div>Studio</div>
                  <div className="mt-5">Brands</div>
                  <div className="mt-6">Extreme</div>
                </div>
              </div>
              <div className="flex flex-col mt-1 text-neutral-500">
                <div className="text-xl font-medium text-pink-50">Used</div>
                <div className="mt-7">Buy & Sell</div>
                <div className="mt-4">Policy</div>
                <div className="mt-4">Report Fraud</div>
              </div>
              <div className="flex flex-col mt-1 text-neutral-500">
                <div className="text-xl font-medium text-pink-50">About</div>
                <div className="mt-7">Contact</div>
                <div className="mt-6">Our story</div>
                <div className="mt-4">Blog</div>
              </div>
              <div className="flex gap-1.5 text-xl font-medium whitespace-nowrap">
                <div className="flex gap-1 py-px pr-4 pl-3 bg-red-500 border border-red-500 border-solid text-zinc-900">
                  <div>USD $</div>
                </div>
                <div className="flex gap-0.5 py-px pr-4 pl-3 border border-solid border-zinc-400 text-zinc-400">
                  <div>EUR €</div>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto text-neutral-500">
                <div className="text-xl font-medium text-pink-50">
                  Contact Information
                </div>
                <div className="flex gap-2.5 mt-6">
                  <img
                    loading="lazy"
                    src="/icons/phone.png"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-auto my-auto">+972 123-456-78</div>
                </div>
                <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="/icons/icon-inbox.png"
                    className="shrink-0 w-6 aspect-video"
                  />
                  <div className="flex-auto">name@camera.com</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="text-sm font-light text-neutral-500">
                © 2023 PIXEL. <br />
                All Rights Reserved
              </div>

              <div>
                <img
                  loading="lazy"
                  src="/icons/icon-payments.png"
                  className="shrink-0 w-full"
                />
              </div>
              <div className="flex gap-5 justify-between text-sm font-light text-neutral-500 max-md:flex-wrap max-md:max-w-full">
                <div>Return Policy</div>
                <div>Accessibility</div>
                <div>Terms of Use</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden flex flex-col pt-6 pb-10 mx-auto w-full bg-black max-w-[480px]">
        <img
          loading="lazy"
          src="/icons/logo.png"
          className="self-center aspect-[3.85] w-[72px]"
        />
        <div className="flex flex-col px-6 mt-6 w-full">
          <div className="text-lg text-pink-50">Come visit us!</div>
          <div className="flex gap-2.5 mt-5 text-base text-neutral-500">
            <div className="flex gap-1 items-start">
              <img
                loading="lazy"
                src="/icons/address.png"
                className="shrink-0 aspect-[0.93] fill-red-500 w-[13px]"
              />
              <div>71 Park Lane, London SW43 2LW</div>
              <img
                loading="lazy"
                src="/icons/time.png"
                className="shrink-0 mt-1 w-3.5 aspect-square fill-red-500"
              />
            </div>
            <div className="font-light">
              Sunday to Friday
              <br />
              8:00 - 21:00
            </div>
          </div>
          <img
            loading="lazy"
            src="/images/map.png"
            className="self-center mt-7 aspect-[3.7] w-[332px]"
          />
          <div className="flex gap-5 justify-between items-start mt-12 text-base font-light text-zinc-400">
            <div className="flex flex-col self-stretch whitespace-nowrap">
              <div className="text-lg text-pink-50">Shop</div>
              <div className="mt-4">Cameras</div>
              <div className="mt-3.5">Lenses</div>
              <div className="mt-3.5">Accecories</div>
              <div className="mt-4">Studio</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg text-pink-50">Used</div>
              <div className="mt-5">Buy & Sell</div>
              <div className="mt-2.5">Policy</div>
              <div className="mt-2.5">Report Fraud</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg text-pink-50">About</div>
              <div className="mt-5">Contact</div>
              <div className="mt-3.5">Our Story</div>
              <div className="mt-2.5">Blog</div>
            </div>
          </div>
          <div className="mt-3.5 text-base font-light text-zinc-400">
            Brands
          </div>
          <div className="mt-3.5 text-base font-light text-zinc-400">
            Extreme
          </div>
          <div className="mt-12 text-lg text-pink-50">Contact Information</div>
          <div className="flex gap-4 mt-5 text-base font-light text-zinc-400">
            <img
              loading="lazy"
              src="/icons/phone.png"
              className="shrink-0 aspect-square fill-red-500 w-[18px]"
            />
            <div className="flex-auto">+972 123-456-78</div>
          </div>
          <div className="flex gap-3.5 mt-3 text-base font-light whitespace-nowrap text-zinc-400">
            <img
              loading="lazy"
              src="/icons/icon-inbox.png"
              className="shrink-0 self-start aspect-[1.47] fill-red-500 w-[22px]"
            />
            <div className="flex-auto">name@camera.com</div>
          </div>
          <div className="self-center mt-8 text-lg text-center text-pink-50">
            Join our newsletter!
          </div>
          <div className="justify-center items-start px-3.5 py-3.5 mt-5 text-base font-light whitespace-nowrap bg-pink-50 text-neutral-500">
            Name
          </div>
          <div className="justify-center items-start px-3.5 py-3.5 mt-3 text-base font-light bg-pink-50 text-neutral-500">
            Email Address
          </div>
          <div className="justify-center self-center px-6 py-3 mt-8 text-base font-light text-center text-pink-50 bg-red-500">
            SIGN UP
          </div>
          <div className="flex gap-5 justify-between self-center mt-9">
            <img
              loading="lazy"
              src="/icons/insta.png"
              className="shrink-0 aspect-square fill-pink-50 w-[21px]"
            />
            <img
              loading="lazy"
              src="/icons/facebook.png"
              className="shrink-0 aspect-square fill-pink-50 w-[21px]"
            />
            <img
              loading="lazy"
              src="/icons/twitter.png"
              className="shrink-0 aspect-square fill-pink-50 w-[21px]"
            />
          </div>
          <ul className="flex gap-5 self-center mt-10 text-xs font-light text-center text-zinc-400">
            <li className="grow">Return Policy</li>
            <li>Accessibility</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="flex gap-2 self-center mt-5">
            <div className="flex flex-col">
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src="/icons/icon-payments.png"
                  className="shrink-0 w-full"
                />
              </div>
              <div className="self-end mt-3.5 text-xs font-light text-zinc-400">
                © 2023 PIXEL. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
