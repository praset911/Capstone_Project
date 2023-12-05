import Carousel from '../components/Fragments/Carousel';
import Footer from '../components/Fragments/Footer';
import Navbar from '../components/Fragments/Navbar';
import Dropdown from '../components/Elements/Dropdown';
const Articles = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <body className="px-20 py-10">
        <div>
          <h1 className="text-2xl font-bold">Latest Articles</h1>
          <div>
            <Carousel></Carousel>
          </div>
        </div>
        <div className="py-5 pb-16">
          <h1 className="font-bold text-2xl">All Articles</h1>
          <div className="absolute right-0 px-20">
            <Dropdown />
          </div>
        </div>
        <div className=""></div>
      </body>
      <footer className="mt-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Articles;
