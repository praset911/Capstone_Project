import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Fragments/Navbar';
import Footer from './components/Fragments/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
