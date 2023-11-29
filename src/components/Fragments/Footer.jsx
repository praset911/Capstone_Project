const Footer = () => {
  return (
    <div className="bg-sky-700 px-20 py-5 pb-9 flex justify-between">
      <div className="pt-20">
        <img
          src="/images/fit-life-hub-white-logo.png"
          alt="Fit-life-hub-white-logo"
          className="h-12"
        />
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
            <a href="">Home</a>
          </p>
          <p className="border-b">
            <a href="">Articles</a>
          </p>
          <p className="border-b">
            <a href="">Calc It !</a>
          </p>
          <p className="border-b">
            <a href="">About Us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
