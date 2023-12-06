import Footer from '../components/Fragments/Footer';
import Navbar from '../components/Fragments/Navbar';
import Profile from '../components/Fragments/Profile';
import Members from '../components/Fragments/Members';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <body className="">
        <Profile />
        <Members/>
      </body>
      <footer className="mt-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AboutUs;
