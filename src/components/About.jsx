import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top 30%",
        scrub: 2,
      },
    });

    tl.from(".about-h1-h1", {
      x: -40,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
    })
      .from(".about-p", {
        opacity: 0,
        duration: 3,
        ease: "power1.in",
      })
      .from(".btn1", {
        y: 40,
        opacity: 0,
        duration: 2,
        ease: "power1.in",
      });
  });

  return (
    <>
      <div className="about w-full h-full bg-white px-[5%] sm:px-[5%] py-[40px] md:py-[70px] md:px-[10%]">
        <div>
          <h1 className="about-h1-h1 text-center text-xl sm:text-3xl font-semibold md:text-4xl font-bold tracking-wide">
            About Us
          </h1>
        </div>
        <div className="grid items-center justify-center">
          <div>
            <p className="about-p text-sm md:text-lg text-center mt-4 sm:mt-8 mb-3 sm:mb-6">
              &quot;Founded in 1984, Our Rice Mill embarked on a mission to
              bring innovation, efficiency, and quality to the rice industry.
              Its journey reflects a commitment to integrating various aspects
              of rice processing, distribution, and sustainability, transforming
              the business from a small, locally-focused mill into a major
              player in the global rice market. Here is the comprehensive
              history of Our Rice Mill, detailing its milestones and impact on
              the industry over the years:&quot;
            </p>
          </div>
          <Link
            to="/about"
            className="btn1 inline-block m-auto px-4 py-2 md:px-8 md:py-4 outline-none border-none bg-red-700 text-white text-sm sm:text-md"
          >
            Know More
          </Link>
        </div>
      </div>
    </>
  );
}
