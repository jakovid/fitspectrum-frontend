import React, { useState } from "react"

import BmiResultsGenerator from "./bmi-results-generator"

export default function BuildMetricInput(){

    let [weight, setWeight] = useState<number>(0)
    let [height, setHeight] = useState<number>(0)
    let [bmi, setBmi] = useState<number>(0)

    function handleHeightChange(event: React.ChangeEvent<HTMLInputElement>){
        setHeight(parseFloat(event.target.value))
    }

    function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>){
        setWeight(parseFloat(event.target.value))
    }

    function handleFindBmi(){
        if (!height || !weight){ return }
        let meters = height/100
        let bmiScore = Math.round(weight / (meters*meters) * 100) / 100
        setBmi(bmiScore)
    }

    return(
        <div className="flex flex-col gap-2 justify-center items-center">

        <div className="grid grid-cols-3 gap-2 w-full">
            <label className="col-span-1">weight:</label>
            <div className="col-span-2 flex gap-2">
                <input onChange={handleWeightChange} value={weight} type="number" className="text-black w-12 pl-1" />
                <div>kg</div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full">
            <label className="col-span-1">height:</label>
            <div className="col-span-2 flex gap-2">
                <input onChange={handleHeightChange} value={height} type="number" className="text-black w-12 pl-1"></input>
                <div>cm</div>
            </div>
        </div>

        <span onClick={handleFindBmi} className="bg-gray-400 px-4 py-1 w-full text-center rounded-s-full rounded-e-full hover:bg-white hover:text-black">Calculate BMI</span>
        {bmi > 0 && <BmiResultsGenerator score={bmi} /> }
    </div>

    )
}