import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Fragments/Navbar";
import Footer from "./components/Fragments/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Calculator from "./pages/Calculator";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
