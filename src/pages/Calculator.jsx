/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { calculateBMI } from "../components/Utils/BMICal";
import InputForm from "../components/Elements/InputForm";
import ResultDisplay from "../components/Fragments/ResultDisplay";

const ErrorMessage = ({ message }) => {
  return <div className="text-red-500 text-sm mt-2">{message}</div>;
};

const Calculator = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBMI] = useState(null);
  const [calories, setCalories] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCalculateBMI = () => {
    if (!gender || !weight || !height || !age) {
      setErrorMessage("Silakan lengkapi semua kolom");
      return;
    }

    const calculatedBMI = calculateBMI(weight, height);
    setBMI(calculatedBMI);
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <body>
        <h1 className="text-center text-sky-800 text-2xl font-bold">
          Calc BMI!
        </h1>
        <h4 className="text-center text-zinc-500 font-normal text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Non diam phasellus
          vestibulum lorem
        </h4>

        <div className="flex mx-[100px] justify-between py-10 gap-x-20">
          <div className="w-[500px] h-[282px]">
            <h3 className="text-center text-sky-800 text-2xl font-bold">
              Calc It!
            </h3>
            <h5 className="text-center text-zinc-500 font-normal text-xl">
              Masukkan rincian Anda di sini
            </h5>
            <InputForm
              gender={gender}
              setGender={setGender}
              weight={weight}
              setWeight={setWeight}
              height={height}
              setHeight={setHeight}
              age={age}
              setAge={setAge}
              handleCalculateBMI={handleCalculateBMI}
            />
            {/* Komponen ErrorMessage */}
            <ErrorMessage message={errorMessage} />
          </div>
          <div className="w-[530px] h-[282px]">
            <ResultDisplay bmi={bmi} />
          </div>
        </div>
      </body>
    </div>
  );
};

export default Calculator;
