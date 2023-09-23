import { useState } from "react"
export default function bmi() {
    type SexType = 'male' | 'female';
    type MeasurementSystem = 'imperial' | 'metric';

    let [sex, setSex] = useState<SexType>("female");
    let [measurementType, setMeasurementType] = useState<MeasurementSystem>("imperial")

    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col bg-gray-400/60 w-1/2 items-center justify-center p-4">
            <h3 className="text-xl">BMI Calculator</h3>
            <div className="flex flex-row gap-4">
                <span className={`w-20 flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "metric" ? "bg-red-900 text-white" : ""}`}>Metric</span>
                <span className={`w-20 flex justify-center rounded-s-full rounded-e-full border-white border-2 ${measurementType == "imperial" ? "bg-red-900 text-white" : ""}`}>Imperial</span>
            </div>
            <form>
                <div>
                    <label>sex: </label>
                    <select id='user_sex' name="user_sex" className="text-black" required>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                </div>
                <div>
                    <label>weight ({measurementType == "imperial" ? "lbs" : "kg"}):</label>
                    <input type="number" className="text-black"></input>
                </div>
            </form>
        </div>
      </div>
    )
  }