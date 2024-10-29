import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".home h1", {
      x: -30,
      delay: 4,
      text: {
        value: "",
      },
      duration: 2,
      opacity: 0,
      ease: "p",
    })
      .from(".home p", {
        x: -30,
        duration: 2,
        text: {
          value: "",
        },
        opacity: 0,
        ease: "power1.inOut",
      })
      .from(".home .btn", {
        x: -30,
        duration: 1,
        text: {
          value: "",
        },
        opacity: 0,
        ease: "power1.inOut",
      });
  });
  return (
    <div className="hero w-full h-screen px-[10%] py-[30px] flex items-center justify-center flex-col">
      <div className="home">
        <h1 className="text-5xl font-semibold tracking-wide pb-6 leading-14">
          Delivering <br /> Trust and Quality <br /> for Over a Century
        </h1>
        <p className="text-lg">
          Founded on precision and quality, our rice mill combines
          state-of-the-art technology with years of expertise to deliver
          premium, perfectly milled rice. Committed to excellence from sourcing
          to packaging, we ensure each grain meets the highest standards of
          purity, taste, and quality, supporting both local farmers and global
          consumers.
        </p>
        <button className="btn mt-4 inline-block w-[12%] flex items-center justify-center  px-8 py-4 bg-red-500 text-md  text-white text-md font-semibold tracking-wide">
          Explore
        </button>
      </div>
    </div>
  );
}
