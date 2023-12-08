import NavButton from "../Elements/Navbutton";

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
        <NavButton to="/" label="Home" />
        <NavButton to="/articles" label="Articles" />
        <NavButton to="/calculator" label="Calc It!" />
        <NavButton to="" label="About Us" />
      </div>
    </div>
  );
};

export default Navbar;
