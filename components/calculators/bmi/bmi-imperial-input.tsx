import React, { useState } from "react"
import BmiResultsGenerator from "./bmi-results-generator"

export default function BuildImperialInput(){

    let [weight, setWeight] = useState<number>(0)
    let [feet, setFeet] = useState<number>(0)
    let [inches, setInches] = useState<number>(0)
    let [bmi, setBmi] = useState<number>(0)

    function handleFeetChange(event: React.ChangeEvent<HTMLInputElement>){
        setFeet(parseFloat(event.target.value))
    }

    function handleInchesChange(event: React.ChangeEvent<HTMLInputElement>){
        setInches(parseFloat(event.target.value))
    }

    function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>){
        setWeight(parseFloat(event.target.value))
    }

    function handleFindBmi(){
        if (!feet || !weight) { return }
        let totalInches = (feet * 12) + inches;
        let totalMeters = (totalInches * 2.54) / 100
        let totalKg = weight * 0.45359237
        let bmiScore = Math.round(totalKg / (totalMeters * totalMeters) * 100) / 100
        setBmi(bmiScore)
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center">

        <div className="grid grid-cols-3 gap-2 w-full">
            <label className="col-span-1">weight:</label>
            <div className="col-span-2 flex gap-2">
                <input onChange={handleWeightChange} value={weight} type="number" className="text-black w-12 pl-1" />
                <div>lbs</div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full">
            <label className="col-span-1">height:</label>
            <div className="col-span-2 flex gap-2">
                <input onChange={handleFeetChange} value={feet} type="number" className="text-black w-8 pl-1"></input>
                <div>ft</div>
                <input onChange={handleInchesChange} value={inches} type="number" className="text-black w-8 pl-1"></input>
                <div>in</div>
            </div>
        </div>

        <span onClick={handleFindBmi} className="bg-gray-400 px-4 py-1 w-full cursor-pointer text-center rounded-s-full rounded-e-full hover:bg-white hover:text-black">Calculate BMI</span>
        {bmi > 0 && <BmiResultsGenerator score={bmi} /> }
    </div>

    )
}