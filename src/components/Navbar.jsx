import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Navbar() {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add("navbar");
      } else {
        navRef.current.classList.remove("navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".logo", {
      y: -30,
      duration: 1.3,
      text: {
        value: "",
      },
      delay: 0.5,
      opacity: 0,
      ease: "power1.inOut",
    }).from(".nav .a", {
      opacity: 0,
      duration: 2,
      stagger: {
        each: 0.3,
        from: "random",
      },
      y: -30,
      ease: "power1.inOut",
    });
  });
  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-[3%] py-8 bg-red-400 text-white z-50"
    >
      <div className="">
        <h1 className="logo text-3xl font-semibold tracking-wide">
          Tiwana Rice Mill
        </h1>
      </div>
      <div className="nav flex items-center justify-between gap-x-8">
        <a href="/" className="a text-xl font-semibold">
          HOME
        </a>
        <a href="/about" className="a text-xl font-semibold">
          ABOUT US
        </a>
        <a href="/products" className="a text-xl font-semibold">
          PRODUCTS
        </a>
        <a href="/why" className="a text-xl font-semibold">
          WHY US
        </a>
        <a href="/contact" className="a text-xl font-semibold">
          CONTACT US
        </a>
      </div>
    </div>
  );
}
