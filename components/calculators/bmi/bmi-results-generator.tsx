import { useState } from "react";

interface BmiResultsGeneratorProps {
    score: number;
  }

export default function BmiResultsGenerator({ score }: BmiResultsGeneratorProps){

    return(
        <div className="flex flex-col">

            <div className="flex gap-1">
                <div>Your BMI is </div>
                <div className="font-bold">{ score }</div>
            </div>

            <div className="flex gap-1">
                <div>You are considered <div className="font-bold">{(score < 18.5 ? "underweight" : score < 24 ? "normal" : score < 30 ? "overwight" : "obese")}</div></div>
                
            </div>
            
        </div>

    )
}