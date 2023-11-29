const Navbar = () => {
  return (
    <div className="bg-white px-20 py-7 item-center justify-between flex">
      <div>
        <img
          src="/images/fit-life-hub-high-resolution-logo-transparent.png"
          alt="fit-life-hub-logo"
          className="h-8"
        />
      </div>
      <div className="space-x-10 text-lg font-medium">
        <a href="" className="text-sky-900">
          Home
        </a>
        <a href="" className="text-gray-400">
          Articles
        </a>
        <a href="" className="text-gray-400">
          Calc It!
        </a>
        <a href="" className="text-gray-400">
          About Us
        </a>
      </div>
    </div>
  );
};
export default Navbar;
