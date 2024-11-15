import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";
import Productpage from "./pages/Productpage";
import Whypage from "./pages/Whypage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/why" element={<Whypage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
