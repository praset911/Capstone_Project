import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <body className="flex px-20 justify-between items-center py-10">
        <div className="flex-col">
          <div className="mb-5">
            <div className="font-bold text-6xl">
              Welcome to <p>Fit Life Hub</p>
            </div>
            <div className="text-2xl text-stone-700">
              Look for information about your
              <p>health on our website</p>
            </div>
          </div>
          <div className="text-white font-semibold">
            <Link
              to="/articles"
              className="bg-sky-900 rounded-xl text-center py-3 px-5"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div>
          <img src="/images/nurse-1.webp" alt="" className="rounded-xl" />
        </div>
      </body>
    </div>
  );
};

export default Home;
