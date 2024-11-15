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
    <div className="hero bg-stone-400 w-full h-full px-[5%] py-[40px] sm:px-[10%] sm:py-[100px] flex items-center justify-center flex-col">
      <div className="home">
        <h1 className="text-2xl font-semibold sm:text-3xl font-semibold md:text-5xl font-bold tracking-wide pb-6 leading-14">
          Delivering <br /> Trust and Quality <br /> for Over a Century
        </h1>
        <p className="text-sm sm:text-md md:text-lg">
          Founded on precision and quality, our rice mill combines
          state-of-the-art technology with years of expertise to deliver
          premium, perfectly milled rice. Committed to excellence from sourcing
          to packaging, we ensure each grain meets the highest standards of
          purity, taste, and quality, supporting both local farmers and global
          consumers.
        </p>
      </div>
    </div>
  );
}
