import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Why from "../components/Why";
import Hero from "../components/Hero";
import About from "../components/About";
import Time from "../components/Time";

export default function Home() {
  return (
    <div className="m-0 p-0">
      <Time />
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Why />
      <Footer />
    </div>
  );
}
