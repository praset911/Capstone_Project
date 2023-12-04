import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";

const Article = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <body>
        <div className="p-4 m-4">
          <img className="w-full h-96 rounded-lg shadow-lg" src="/images/nurse-1.webp" alt="" />
          <div className="mt-6 mb-4 font-bold text-2xl">Tittle</div>
          <div className="my-4 font-medium text-lg">Nov  21, 2023 | Creator</div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
          </p>
        </div>
      </body>
      <footer className="mt-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Article;
