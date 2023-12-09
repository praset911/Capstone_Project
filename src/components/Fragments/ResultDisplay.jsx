/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import BMIResult from "../Elements/BMIRes";

const ResultDisplay = ({ bmi }) => {
  return (
    <div className="">
      <h3 className="text-center text-sky-800 text-2xl font-bold">Result</h3>
      <div className="w-full min-h-[18rem] bg-zinc-300 bg-opacity-10 rounded-[1.25rem] shadow mt-[2rem]">
        {bmi !== null && <BMIResult bmi={bmi} />}
      </div>
    </div>
  );
};

export default ResultDisplay;
