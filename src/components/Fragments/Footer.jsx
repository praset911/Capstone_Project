import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="bg-sky-700 px-20 py-5 pb-9 flex justify-between">
        <div className="pt-20">
          <Link to="/">
          <img
            src="/images/fit-life-hub-white-logo.png"
            alt="Fit-life-hub-white-logo"
            className="h-12"
          />
        </Link>
      </div>
      <div className="flex space-x-20 text-white leading-loose">
        <div>
          <p className="font-bold text-lg">Our Members</p>
          <p className="border-b">
            <a href="">Tralya Dharmada</a>
          </p>
          <p className="border-b">
            <a href="">Prasetya Kusuma Atmaja</a>
          </p>
          <p className="border-b">
            <a href="">Muhammad Abyan Shidqi</a>
          </p>
          <p className="border-b">
            <a href="">Ahmad Hauzan Abid Romadhon</a>
          </p>
          <p className="border-b">
            <a href="">Mohammad Agil Rofiqul Zein</a>
          </p>
        </div>
        <div className="w-56">
          <p className="font-bold text-lg">Explore</p>
          <p className="border-b">
            <Link to="/">Home</Link>
          </p>
          <p className="border-b">
            <a href="">Articles</a>
          </p>
          <p className="border-b">
            <a href="">Calc It !</a>
          </p>
          <p className="border-b">
            <Link to="/about-us">About Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
