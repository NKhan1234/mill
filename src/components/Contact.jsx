import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const [subscribe, setSubscribe] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    setSubscribe(true);
  }

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".contact-h1", {
      x: -40,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
    })
      .from(".form .inn", {
        x: -40,
        opacity: 0,
        duration: 1.5,
        ease: "power1.inOut",
        stagger: {
          each: 0.3,
          from: "start",
        },
      })
      .from(".detail .out", {
        opacity: 0,
        x: 50,
        duration: 2,
        ease: "power1.inOut",
        stagger: {
          each: 0.3,
          from: "start",
        },
      });
  }, []);

  return (
    <div className="contact w-full h-full bg-red-200 px-[10%] py-[100px] flex flex-col">
      <div>
        <h1 className="contact-h1 text-black text-center text-5xl font-bold tracking-wide ">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-evenly gap-x-8 mt-12">
        <form className="form grid gap-y-8">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="inn px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="inn px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500"
          />
          <input
            type="number"
            placeholder="Enter Your Number"
            className="inn px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500"
          />
          <textarea
            placeholder="Message"
            cols="30"
            rows="6"
            className="inn resize-none px-2 py-2 w-[400px] outline-none rounded-lg border-2 border-solid border-red-500 placeholder:text-red-500 text-red-500"
          />
          <button className="inn btn8 px-6 py-2 outline-none border-none bg-red-400 text-white text-lg">
            SUBMIT
          </button>
        </form>
        <div className="detail text-red-600">
          <div>
            <h2 className="out text-2xl font-bold inline-flex mb-4">
              Contact Detail
            </h2>
          </div>
          <div className="grid gap-y-4">
            <div>
              <p className="out">
                <span>
                  <i className="ri-phone-line"></i>
                </span>{" "}
                +91-9847478333
              </p>
              <p className="out flex gap-x-2">
                <span>
                  <i className="ri-mail-line"></i>
                </span>{" "}
                youremail@gmail.com
              </p>
            </div>
            <div>
              <p className="out text-md">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>{" "}
                Durga Enterprises, Rudrapur, Uttarakhand, India.
              </p>
            </div>
            <div className="grid items-center justify-center gap-y-4 py-[40px]">
              <div className="text-center">
                <h1 className="out text-3xl font-semibold tracking-wide">
                  Subscribe To Our Newsletter
                </h1>
                <p className="out text-md">
                  Promotions, new products and sales. Directly to your inbox.
                </p>
              </div>
              <div>
                {subscribe ? (
                  <h1 className="text-2xl text-center">
                    Thanks for subscribing
                  </h1>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="out flex items-center mt-2"
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
  );
}
