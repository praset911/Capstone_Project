/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { calculateBMI } from "../components/Utils/BMICal";
import { calculateCalories } from "../components/Utils/CaloriesCal";
import { calculateBodyWeight } from "../components/Utils/BodyWeightCal";
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
  const [bodyWeight, setbodyWeight] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCalculate = () => {
    if (!gender || !weight || !height || !age) {
      setErrorMessage("Silakan lengkapi semua kolom");
      return;
    }

    const calculatedBMI = calculateBMI(weight, height);
    setBMI(calculatedBMI);

    const calculatedCalories = calculateCalories(weight, height, age, gender);
    setCalories(calculatedCalories);

    const calculatedbodyWeight = calculateBodyWeight(height, gender);
    setbodyWeight(calculatedbodyWeight);

    setErrorMessage("");
  };

  return (
    <body className="min-h-screen">
      <h1 className="text-center text-sky-800 text-2xl font-bold">Calc BMI!</h1>
      <h4 className="text-center text-zinc-500 font-normal text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br />
        incididunt ut labore et dolore magna aliqua. Non diam phasellus
        vestibulum lorem
      </h4>

      <div className="flex mx-[100px] justify-between py-10 gap-x-20">
        <div className="w-[500px] h-[282px]">
          <h3 className="text-center text-sky-800 text-2xl font-bold">
            Calc It!
          </h3>
          <h5 className="text-center text-zinc-500 font-normal text-xl">
            Input ur details here
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
            handleCalculate={handleCalculate}
          />
          {/* Komponen ErrorMessage */}
          <ErrorMessage message={errorMessage} />
        </div>
        <div className="w-[500px] h-[282px">
          {bmi && calories && bodyWeight && (
            <ResultDisplay
              bmi={bmi}
              calories={calories}
              bodyWeight={bodyWeight}
            />
          )}
        </div>
      </div>
    </body>
  );
};

export default Calculator;
