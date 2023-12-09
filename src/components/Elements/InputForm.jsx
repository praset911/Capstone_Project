/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InputForm = ({
  gender,
  setGender,
  weight,
  setWeight,
  height,
  setHeight,
  age,
  setAge,
  handleCalculateBMI,
}) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="gender" className="mb-2">
          Gender
        </label>
        <form>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
          />
          <label htmlFor="male" className="ml-2">
            Male
          </label>

          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            className="ml-5"
            onChange={() => setGender("female")}
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
          onChange={(e) => setWeight(e.target.value)}
          className="text-sm rounded w-full py-2 placeholder:opacity-50"
          placeholder="Weight in Kg"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="height" className="mb-2">
          Height
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="text-sm rounded w-full py-2 placeholder:opacity-50"
          placeholder="Height in Cm"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="mb-2">
          Age
        </label>
        <input
          type="number"
          value={age}
          className="text-sm rounded w-full py-2 placeholder:opacity-50"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button
        onClick={handleCalculateBMI}
        className="h-10 w-28 rounded-2xl bg-sky-800 text-cyan-50"
      >
        Caclulae BMI
      </button>
    </div>
  );
};

export default InputForm;
