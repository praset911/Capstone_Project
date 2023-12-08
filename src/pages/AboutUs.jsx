import Profile from "../components/Fragments/Profile";
import Members from "../components/Fragments/Members";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <body className="">
        <Profile />
        <Members />
      </body>
    </div>
  );
};

export default AboutUs;
