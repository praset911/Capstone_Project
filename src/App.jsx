import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Fragments/Navbar';
import Footer from './components/Fragments/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Calculator from './pages/Calculator';
import AboutUs from './pages/AboutUs';
const App = () => {
  return (
    <div className="md:flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="calc-it" element={<Calculator />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
