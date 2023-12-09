import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="px-5 py-3 md:px-20 md:py-10 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col text-center md:text-left md:w-1/2">
        <div className="mb-5">
          <div className="font-bold text-4xl md:text-6xl leading-tight">
            Welcome to <p>Fit Life Hub</p>
          </div>
          <div className="text-lg md:text-xl text-stone-700 leading-relaxed">
            Look for information about your
            <p>health on our website</p>
          </div>
        </div>
        <div className="text-white font-semibold pb-10">
          <Link
            to="/articles"
            className="bg-sky-900 md:rounded-xl md:w-auto w-full text-center md:text-base text-sm py-3 px-5"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/nurse-1.webp"
          alt=""
          className="rounded-xl w-full mb-10 md:mb-0 md:w-auto md:h-auto h-40 md:object-none object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Home;
