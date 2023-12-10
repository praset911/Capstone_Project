import NavButton from "../Elements/Navbutton";

const ResultNavbar = () => {
  return (
    <div className="bg-white px-5 item-center ">
      <div className="font-medium text-lg text-center mx-3">
        <NavButton to="bmi" label="BMI" />
        <NavButton to="calories" label="Calories" />
        <NavButton to="body-weight" label="Body Weight" />
      </div>
    </div>
  );
};

export default ResultNavbar;
