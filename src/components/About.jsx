import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState } from "react";

export default function About() {
  const [showmore, setShowmore] = useState(false);
  const handleMore = () => {
    setShowmore(!showmore);
  };
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".about-h1", {
      x: -40,
      opacity: 0,
      duration: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top 30%",
        scrub: 2,
      },
    })
      .from(".about-p", {
        text: {
          value: "",
        },
        duration: 3,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".about",
          start: "top center",
          end: "top 30%",
          scrub: 2,
        },
      })
      .from(".btn1", {
        y: 40,
        text: {
          value: "",
        },
        duration: 2,
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".about",
          start: "top center",
          end: "top 30%",
          scrub: 2,
        },
      });
  });

  return (
    <>
      <div className="about w-full h-full bg-white px-[10%] py-[120px]">
        <div className="">
          <h1 className="about-h1 text-center text-4xl font-semibold tracking-wide">
            About Us
          </h1>
        </div>
        <div className="grid items-center justify-center">
          <div className="">
            <p className="about-p text-lg text-center mt-8 mb-6">
              {showmore
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in ut omnis accusantium deleniti natus porro fugiat exercitationem repudiandae molestias! Molestias, dolorem reiciendis Accusantium provident odit nulla laboriosam iste laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod doloremque quidem necessitatibus ducimus ad esse culpa blanditiis, placeat ab, voluptas aliquid dolores, fugiat soluta debitis nobis eius ipsum commodi neque at aperiam Officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in ut omnis accusantium deleniti natus porro fugiat exercitationem repudiandae molestias! Molestias, dolorem reiciendis Accusantium provident odit nulla laboriosam iste laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod doloremque quidem necessitatibus ducimus ad esse culpa blanditiis, placeat ab, voluptas aliquid dolores, fugiat soluta debitis nobis eius ipsum commodi neque at aperiam Officiis."
                : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis in ut omnis accusantium deleniti natus porro fugiat exercitationem repudiandae molestias! Molestias, dolorem reiciendis Accusantium provident odit nulla laboriosam iste laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in ut omnis accusantium deleniti natus porro fugiat exercitationem repudiandae molestias! Molestias, dolorem reiciendis Accusantium provident odit nulla laboriosam iste laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod doloremque quidem necessitatibus ducimus ad esse culpa blanditiis, placeat ab, voluptas aliquid dolores, fugiat soluta debitis nobis eius ipsum commodi neque at aperiam Officiis."}
            </p>
          </div>
          <button
            onClick={handleMore}
            className="btn1 inline-block w-[15%] m-auto px-8 py-4 outline-none border-none bg-red-400 text-white text-lg"
          >
            {showmore ? "Show Less" : "Know More"}
          </button>
        </div>
      </div>
    </>
  );
}
