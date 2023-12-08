/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { calculateBMI } from "../components/Utils/BMICal";
import BMIResult from "../components/Fragments/BMIRes";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleCalculateBMI = () => {
    const calculatedBMI = calculateBMI(weight, height);
    setBMI(calculatedBMI);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <body>
        <h1 className="text-center text-black text-2xl font-bold">Calc It!</h1>
        <h4 className="text-center text-zinc-500 font-normal text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Non diam phasellus
          vestibulum lorem
        </h4>
        <div className="flex mx-[100px] justify-between py-10">
          <div className="w-[500px] h-[282px]">
            <h3 className="text-center text-sky-800 text-2xl font-bold">
              Calc It!
            </h3>
            <h5 className="text-center text-zinc-500 font-normal text-xl">
              Input ur details here
            </h5>
            <div>
              <div className="mb-3">
                <label htmlFor="weight" className="mb-2">
                  Gender
                </label>
                <form>
                  <input type="radio" name="gender" id="m" value="male" />
                  <label htmlFor="male" className="ml-2">
                    Male
                  </label>

                  <input
                    type="radio"
                    name="gender"
                    id="f"
                    value="female"
                    className="ml-5"
                  />
                  <label htmlFor="female" className="ml-2">
                    Female
                  </label>
                </form>
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="mb-2">
                  Weight
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                  className="text-sm rounded w-full py-2 placeholder:opacity-50"
                  placeholder="Weight in Kg"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="height" className="mb-2">
                  Heigt
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={handleHeightChange}
                  className="text-sm rounded w-full py-2 placeholder:opacity-50"
                  placeholder="Height in Cm"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="mb-2">
                  Age
                </label>
                <input
                  type="text"
                  className="text-sm rounded w-full py-2 placeholder:opacity-50"
                  placeholder="Age"
                />
              </div>
            </div>
            <button
              onClick={handleCalculateBMI}
              className="h-10 w-28 rounded-2xl bg-sky-800 text-cyan-50"
            >
              Calculate
            </button>
          </div>
          <div className="w-[530px] h-[282px]">
            <h3 className="text-center text-sky-800 text-2xl font-bold">
              Result
            </h3>
            {bmi !== null && <BMIResult bmi={bmi} />}
          </div>
        </div>
      </body>
    </div>
  );
};

export default Calculator;
