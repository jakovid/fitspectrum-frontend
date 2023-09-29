import React, { useState } from "react";


export default function BuildBmiCalculator(){
    type MeasurementSystem = 'imperial' | 'metric';
    type BMITypes = "underweight" | "normal" | "overweight" | "obese"

let [measurementType, setMeasurementType] = useState<MeasurementSystem>("metric");
let [bmiType, setBmiType] = useState<BMITypes | null>(null);
let [bmiCalculation, setBmiCalculation] = useState<number | null>(0);
let [heightMetric, setHeightMetric] = useState<number>(0);
let [weightMetric, setWeightMetric] = useState<number>(0);

function calculateBMI(){
    console.log("calcin' bro")
}

return (
  <div className="flex h-screen items-center justify-center bg-[#00BCD4]">
    <div className="flex flex-col bg-[#FF4081]/60 w-2/3 items-center justify-center p-4 rounded-md gap-4">

        <h3 className="text-xl">BMI Calculator</h3>

        <div className="flex flex-row gap-4">
            <span onClick={() => setMeasurementType("metric")} className={`w-20 flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "metric" ? "bg-[#00BCD4] text-white" : "bg-white text-[#263238]"}`}>Metric</span>
            <span onClick={() => setMeasurementType("imperial")} className={`w-20 flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "imperial" ? "bg-[#00BCD4] text-white" : "bg-white text-[#263238]"}`}>Imperial</span>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">

            <div className="grid grid-cols-3 gap-2 w-full">
                <label className="col-span-1">weight:</label>
                <div className="col-span-2 flex gap-2">
                    <input value={weightMetric} type="number" className="text-black w-12 pl-1" />
                    <div>kg</div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full">
                <label className="col-span-1">height:</label>
                <div className="col-span-2 flex gap-2">
                    <input value={heightMetric} type="number" className="text-black w-12 pl-1"></input>
                    <div>{measurementType == "imperial" ? "ft." : "cm"}</div>
                </div>
            </div>

            <span onClick={() => {calculateBMI()}} className="bg-gray-400 px-4 py-1 w-full text-center rounded-s-full rounded-e-full hover:bg-white hover:text-black">Calculate BMI</span>
        </div>

    </div>
  </div>
)

}