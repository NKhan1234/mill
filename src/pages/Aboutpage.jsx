import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function Aboutpage() {
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
      <Navbar />
      <div className="about w-full h-full bg-white pt-[75px]">
        <div className="about-h1">
          <h1 className="px-[5%] py-8 text-2xl font-semibold sm:px-[10%] sm:py-12 sm:text-4xl sm:font-bold tracking-wide text-white">
            About Us
          </h1>
        </div>
        <div className="grid items-center justify-center px-[10%] py-[100px]">
          <div className="border border-solid border-t-black pt-8 py-6 px-4">
            <h1 className="text-xl font-semibold">
              1980s: The Foundation and Vision
            </h1>
            <p className="about-p text-md text-center mt-2 mb-6">
              Establishment in 1984: Our Rice Mill was founded with a vision to
              modernize traditional rice milling practices by incorporating
              advanced technology and creating an interconnected rice processing
              ecosystem. This approach set it apart from other mills, which
              typically focused only on basic milling operations. First Steps in
              Modernization: In its early years, the mill invested in mechanized
              equipment, including automated dehusking and polishing machines,
              which significantly increased productivity and improved rice
              quality. The founders were keen on adopting the latest technology
              to optimize milling efficiency, reduce waste, and enhance product
              quality.
            </p>
          </div>
          <div className="border border-solid border-t-black pt-8 py-6 px-4">
            <h1 className="text-xl font-semibold">
              1990s: Expansion and Technological Integration
            </h1>
            <p className="about-p text-md text-center mt-2 mb-6">
              Expansion of Facilities: As demand for high-quality rice grew, Our
              Rice Mill expanded its production facilities, increasing capacity
              to meet both local and regional demand. This period saw the
              establishment of partnerships with local farmers and suppliers,
              creating a stable supply chain. Introduction of Advanced Milling
              Technologies: In the early 90s, the company adopted modern milling
              technologies such as rubber rollers and pneumatic huskers. These
              machines improved the dehusking process, reduced grain breakage,
              and allowed for better control over rice quality. Focus on Quality
              Control: Recognizing the importance of consistency, the mill
              implemented rigorous quality control measures, including grading
              and sorting technologies that categorized rice based on size,
              color, and quality, further enhancing the product&apos;s appeal to
              a growing market.
            </p>
          </div>
          <div className="border border-solid border-t-black pt-8 py-6 px-4">
            <h1 className="text-xl font-semibold">
              2000s: Diversification and Sustainability Efforts
            </h1>
            <p className="about-p text-md text-center mt-2 mb-6">
              Launch of Premium Rice Varieties: To cater to a wider audience,
              Our Rice Mill diversified its product range, offering premium,
              long-grain, and specialty rice varieties. This move not only
              broadened the customer base but also strengthened the brand’s
              position in the competitive rice industry. Focus on
              Sustainability: In response to increasing environmental awareness,
              the mill took steps to reduce its ecological footprint.
              Sustainable practices were introduced, including waste management
              programs that repurposed rice husks as biomass fuel, cutting down
              energy costs and reducing waste. Digital Transformation: This era
              also marked the beginning of digital integration. Automated
              systems were installed to monitor production processes, improving
              efficiency and enabling real-time adjustments to maintain product
              quality. This transformation allowed the mill to better manage
              resources and track its supply chain.
            </p>
          </div>
          <div className="border border-solid border-t-black pt-8 py-6 px-4">
            <h1 className="text-xl font-semibold">
              2010s: Global Expansion and Technological Leadership
            </h1>
            <p className="about-p text-md text-center mt-2 mb-6">
              Expansion into Global Markets: With a strong reputation
              established in its home country, Our Rice Mill expanded into
              international markets, exporting rice to North America, Europe,
              and the Middle East. This expansion was supported by adherence to
              global food safety standards, which further strengthened its
              reputation. Investment in Research and Development: The company
              invested heavily in R&D, developing proprietary techniques to
              enhance the texture, taste, and nutritional content of rice. R&D
              efforts also led to the creation of enriched rice products that
              appealed to health-conscious consumers. Introduction of Fully
              Automated Milling Lines: By the mid-2010s, Our Rice Mill upgraded
              its facilities with fully automated milling lines. These systems,
              equipped with AI-driven sorters and moisture-control technology,
              enabled precise milling with minimal human intervention,
              maximizing yield and ensuring consistent quality.
            </p>
          </div>
          <div className="border border-solid border-t-black pt-8 py-6 px-4">
            <h1 className="text-xl font-semibold">
              2020s: Commitment to Innovation and Community
            </h1>
            <p className="about-p text-md text-center mt-2 mb-6 ">
              Sustainability and Social Responsibility: Building on its history
              of environmental responsibility, the mill implemented
              carbon-neutral production goals, and sustainable packaging
              options, and further reduced water usage in its processing
              methods. It also initiated programs to support local farming
              communities by providing training, resources, and fair-trade
              agreements. Smart Milling Technologies: Embracing the era of
              Industry 4.0, the mill introduced IoT-based monitoring systems
              that provided data on every aspect of production. This technology
              allowed for predictive maintenance, reducing downtime and
              enhancing productivity. Focus on Community and Employee Welfare:
              Alongside its technological advancements, the company introduced
              programs focused on employee welfare, education, and community
              development, reaffirming its commitment to being a responsible
              corporate citizen. It provided skill training to local workers and
              ensured that its business practices aligned with fair labor
              standards.
            </p>
          </div>
          <div className="border border-solid border-t-black pt-8 mb-8 py-6 px-4">
            <h1 className="text-xl font-semibold">Today and the Future</h1>
            <p className="about-p text-md text-center mt-2 mb-6">
              Leader in Innovation and Sustainability: Today, Our Rice Mill
              stands as a global leader in the rice industry, known for its
              cutting-edge technology, sustainable practices, and commitment to
              quality. The mill continues to explore new rice varieties,
              research innovative milling techniques, and invest in
              environmentally friendly practices. Future Goals: Looking ahead,
              the mill aims to pioneer eco-friendly packaging solutions, advance
              genetic research for more resilient rice strains, and strengthen
              its community impact by supporting local agriculture and
              sustainability initiatives.
            </p>
          </div>
          <Link
            to="/"
            className="btn12 inline m-auto px-8 py-4 outline-none border-none bg-red-700 text-white text-lg"
          >
            Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
