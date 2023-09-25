import { useState } from "react"
export default function bmi() {
    type SexType = 'male' | 'female';
    type MeasurementSystem = 'imperial' | 'metric';

    let [sex, setSex] = useState<SexType>("female");
    let [measurementType, setMeasurementType] = useState<MeasurementSystem>("imperial")

    return (
      <div className="flex h-screen items-center justify-center bg-[#00BCD4]">
        <div className="flex flex-col bg-[#FF4081]/60 w-2/3 items-center justify-center p-4 rounded-md gap-4">

            <h3 className="text-xl">BMI Calculator</h3>

            <div className="flex flex-row gap-4">
                <span onClick={() => setMeasurementType("metric")} className={`w-20 flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "metric" ? "bg-[#00BCD4] text-white" : "bg-white text-[#263238]"}`}>Metric</span>
                <span onClick={() => setMeasurementType("imperial")} className={`w-20 flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "imperial" ? "bg-[#00BCD4] text-white" : "bg-white text-[#263238]"}`}>Imperial</span>
            </div>

            <form className="flex flex-col gap-2">

                <div className="grid grid-cols-3 gap-2">
                    <label className="col-span-1">weight:</label>
                    <div className="col-span-2 flex gap-2">
                        <input type="number" className="text-black w-12"></input>
                        <div>{measurementType == "imperial" ? "lbs" : "kg"}</div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <label className="col-span-1">height:</label>
                    <div className="col-span-2 flex gap-2">
                        <input type="number" className="text-black w-12"></input>
                        <div>{measurementType == "imperial" ? "ft." : "cm"}</div>
                        <input type="number" className={`text-black ${measurementType == "imperial" ? "w-12" : "hidden"}`}></input>
                        <div>{measurementType == "imperial" ? "in." : ""}</div>
                    </div>
                </div>
            </form>
        </div>
      </div>
    )
  }