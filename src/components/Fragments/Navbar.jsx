import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white px-20 py-7 item-center justify-between flex">
      <div>
        <Link to="/">
          <img
            src="/images/fit-life-hub-high-resolution-logo-transparent.png"
            alt="fit-life-hub-logo"
            className="h-8"
          />
        </Link>
      </div>
      <div className="space-x-10 text-lg font-medium">
        <Link to="/" className="text-sky-900">Home</Link>
        <a href="" className="text-gray-400">
          Articles
        </a>
        <a href="" className="text-gray-400">
          Calc It!
        </a>
        <Link to="/about-us" className="text-gray-400">About Us</Link>
      </div>
    </div>
  );
};
export default Navbar;
