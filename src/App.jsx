import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
