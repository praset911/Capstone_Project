/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const BMIResult = ({ bmi }) => (
  <div className="items-center">
    <h2>Your BMI is: {bmi}</h2>
    <p>Interpretation:</p>
    <ul>
      <li>Underweight: BMI less than 18.5</li>
      <li>Normal weight: BMI between 18.5 and 24.9</li>
      <li>Overweight: BMI between 25 and 29.9</li>
      <li>Obesity: BMI 30 or greater</li>
    </ul>
  </div>
);

export default BMIResult;
