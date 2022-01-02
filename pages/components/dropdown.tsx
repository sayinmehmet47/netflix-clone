import React from "react";

export default function Dropdown() {
  return (
    <div>
      <main className="w-3/5 p-8 mx-auto ">
        <section className="shadow row text-bold text-2xl">
          <div className="tabs text-bold text-2xl">
            <div className=" tab mt-2">
              <div className=" bg-neutral-700 relative">
                <input
                  className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6 "
                  type="checkbox"
                  id="chck1"
                ></input>
                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label">
                  <span className=" ">What is Netflix?</span>
                  <div className=" h-7 flex items-center justify-center test">
                    <span className="text-5xl">+</span>
                  </div>
                </header>
                <div className="tab-content">
                  <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                    <ul className="pl-4">
                      <li className="pb-2 text-left">
                        Netflix is a streaming service that offers a wide
                        variety of award-winning TV shows, movies, anime,
                        documentaries, and more on thousands of
                        internet-connected devices. You can watch as much as you
                        want, whenever you want without a single commercial –
                        all for one low monthly price. There`s always something
                        new to discover and new TV shows and movies are added
                        every week!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" tab mt-2">
              <div className="bg-neutral-700 relative ">
                <input
                  className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                  type="checkbox"
                  id="chck2"
                ></input>
                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label">
                  <span className="text-bold text-2xl">
                    How much does Netflix cost?
                  </span>
                  <div className="rounded-full  w-7 h-7 flex items-center justify-center test">
                    <span className="text-5xl">+</span>
                  </div>
                </header>
                <div className="tab-content">
                  <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                    <ul className="pl-4">
                      <li className="pb-2 text-left">
                        Watch Netflix on your smartphone, tablet, Smart TV,
                        laptop, or streaming device, all for one fixed monthly
                        fee. Plans range from EUR7.99 to EUR13.99 a month. No
                        extra costs, no contracts.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" tab mt-2">
              <div className="bg-neutral-700 relative">
                <input
                  className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6"
                  type="checkbox"
                  id="chck3"
                ></input>
                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label">
                  <span className="text-bold text-2xl">Where can I watch?</span>
                  <div className="rounded-full w-7 h-7 flex items-center justify-center test">
                    <span className="text-5xl">+</span>
                  </div>
                </header>
                <div className="tab-content">
                  <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                    <ul className="pl-4">
                      <li className="pb-2 text-left">
                        Watch anywhere, anytime. Sign in with your Netflix
                        account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected
                        device that offers the Netflix app, including smart TVs,
                        smartphones, tablets, streaming media players and game
                        consoles. You can also download your favorite shows with
                        the iOS, Android, or Windows 10 app. Use downloads to
                        watch while you`re on the go and without an internet
                        connection. Take Netflix with you anywhere.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
