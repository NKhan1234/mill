import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

export default function Navbar() {
  const [shownav, setShownav] = useState(false);
  const navRef = useRef();
  const menuRef = useRef();

  const handleNav = () => {
    setShownav((shownav) => !shownav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current.classList.add("navbar");
        setShownav(false);
      } else {
        navRef.current.classList.remove("navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setShownav(false);
    };

    if (shownav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shownav]);
  useEffect(() => {
    if (menuRef.current) {
      gsap.from(menuRef.current, {
        x: 30,
        duration: 1,
        opacity: 0,
      });
    }
  }, [menuRef.current]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo", {
      y: -30,
      duration: 1.3,
      delay: 0.3,
      opacity: 0,
      ease: "power1.inOut",
    }).from(".nav .a", {
      opacity: 0,
      duration: 2,
      stagger: {
        each: 0.2,
        from: "random",
      },
      y: -30,
      ease: "power1.inOut",
    });

    return () => tl.kill();
  });

  return (
    <div
      ref={navRef}
      className="navbar fixed top-0 left-0 right-0 flex items-center justify-between px-[3%] py-4 bg-stone-600 text-white z-50"
    >
      <div className="flex items-center justify-center gap-x-2 logo">
        <img src="/crop.png" alt="logo-img" className="w-[50px] sm:w-[70px]" />
        <div className="text-start">
          <h1 className="text-red-600 text-2xl sm:text-4xl font-bold">Durga</h1>
          <p className="pl-1 text-sm font-normal tracking-wide">Enterprises</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between gap-x-8 nav">
        <Link to="/" className="a text-md font-semibold">
          HOME
        </Link>
        <Link to="/about" className="a text-md font-semibold">
          ABOUT US
        </Link>
        <Link to="/products" className="a text-md font-semibold">
          PRODUCTS
        </Link>
        <Link to="/why" className="a text-md font-semibold">
          WHY US
        </Link>
        <Link to="/contact" className="a text-md font-semibold">
          CONTACT US
        </Link>
      </div>

      {shownav && (
        <div
          ref={menuRef}
          className="menu-items absolute top-[70%] right-[3%] w-[250px] bg-white py-12 px-8 nav flex flex-col items-center gap-y-4 text-stone-600"
        >
          <Link to="/" className="a text-md font-semibold" onClick={handleNav}>
            HOME
          </Link>
          <Link
            to="/about"
            className="a text-md font-semibold"
            onClick={handleNav}
          >
            ABOUT US
          </Link>
          <Link
            to="/products"
            className="a text-md font-semibold"
            onClick={handleNav}
          >
            PRODUCTS
          </Link>
          <Link
            to="/why"
            className="a text-md font-semibold"
            onClick={handleNav}
          >
            WHY US
          </Link>
          <Link
            to="/contact"
            className="a text-md font-semibold"
            onClick={handleNav}
          >
            CONTACT US
          </Link>
        </div>
      )}

      <div
        onClick={handleNav}
        className="cursor-pointer lg:hidden"
        aria-label="Toggle navigation menu"
      >
        <p className="menu">
          <i className="ri-menu-line text-xl font-bold"></i>
        </p>
      </div>
    </div>
  );
}
