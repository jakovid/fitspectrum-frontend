import React, { useState } from "react";
import BuildMetricInput from "./bmi-metric-input";
import BuildImperialInput from "./bmi-imperial-input";


export default function BuildBmiCalculator(){
    type MeasurementSystem = 'imperial' | 'metric';

let [measurementType, setMeasurementType] = useState<MeasurementSystem>("metric");

function calculateBMI(){
    console.log("calcin' bro")
}

return (
  <div className="flex h-screen items-center justify-center bg-[#00BCD4]">
    <div className="flex flex-col bg-[#FF4081]/60 w-2/3 items-center justify-center p-4 rounded-md gap-4">

        <h3 className="text-3xl">BMI Calculator</h3>

        <div className="flex flex-row gap-4">
            <span onClick={() => setMeasurementType("metric")} className={`w-20 cursor-pointer flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "metric" ? "bg-[#00BCD4] text-white" : "bg-white text-[#263238]"}`}>Metric</span>
            <span onClick={() => setMeasurementType("imperial")} className={`w-20 cursor-pointer flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "imperial" ? "bg-[#00BCD4] text-white" : "bg-white text-[#263238]"}`}>Imperial</span>
        </div>
        {measurementType == "metric" && <BuildMetricInput />}
        {measurementType == "imperial" && <BuildImperialInput />}

    </div>
  </div>
)

}