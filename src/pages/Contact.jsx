import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [subscribe, setSubscribe] = useState(false);
  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribe(true);
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-[115vh] bg-red-200 px-[10%] pt-[130px] flex  flex-col gap-y-4">
        <div className="">
          <h1 className="text-center text-5xl font-bold tracking-wide mb-4">
            Contact Us
          </h1>
        </div>
        <div className="flex justify-evenly gap-x-8">
          <form action="" className="grid gap-y-8">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500 "
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500 "
            />
            <input
              type="number"
              placeholder="Enter Your Number"
              className="px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500 "
            />
            <textarea
              placeholder="Message"
              cols="30"
              rows="6"
              className="resize-none px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500 "
            />
            <button className="btn8 px-6 py-2 outline-none border-none bg-red-400 text-white text-lg">
              SUBMIT
            </button>
          </form>
          <div className="text-red-600">
            <div className="">
              <h2 className="text-2xl font-bold inline-flex mb-4">
                Contact Detail
              </h2>
            </div>
            <div className="grid gap-y-4">
              <div className="">
                <p>
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>{" "}
                  +91-9847478333
                </p>
                <p className="flex gap-x-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>{" "}
                  youremail@gmail.com
                </p>
              </div>
              <div className="">
                <p className="text-md">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>{" "}
                  Tiwana Rice mill, Rudrapur, Uttarakhand, India
                </p>
              </div>
              <div className=" grid items-center justify-center gap-y-4 py-[40px]">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold tracking-wide">
                    Subscribe To Our Newsletter
                  </h1>
                  <p className="text-md">
                    Promotions, new products and sales. Directly to your inbox.
                  </p>
                </div>
                <div className="">
                  {subscribe ? (
                    <h1 className="text-2xl text-center">
                      Thanks for subscribing
                    </h1>
                  ) : (
                    <form
                      onSubmit={handleSubscribe}
                      className="flex items-center mt-2"
                    >
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="outline-none px-3 py-2 bg-white w-[360px] border-2 border-red-500 border-solid placeholder:text-red-500 text-red-500"
                        required
                      />
                      <button
                        type="submit"
                        className="btn5 cursor-pointer outline-none border-2 border-red-500 border-solid py-2 px-4 text-red-500 text-md font-semibold tracking-wide"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
