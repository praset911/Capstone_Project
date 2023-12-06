import Carousel from '../components/Fragments/Carousel';
import Footer from '../components/Fragments/Footer';
import Navbar from '../components/Fragments/Navbar';
import Dropdown from '../components/Elements/Dropdown';
import Card from '../components/Fragments/Card';
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
        <div className="pb-16">
          <h1 className="font-bold text-2xl">All Articles</h1>
          <div className="absolute right-0 px-20">
            <Dropdown />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card></Card>
        </div>
      </body>
      <footer className="mt-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Articles;
