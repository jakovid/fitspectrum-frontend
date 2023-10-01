import { useState } from "react";

export default function BmiResultsGenerator(){
    type BMITypes = "underweight" | "normal" | "overweight" | "obese"
    let [bmiType, setBmiType] = useState<BMITypes | null>(null);

    return(
        <div className="flex flex-col">

            <div className="flex gap-1">
                <div>Your BMI is</div>
                <div className="font-bold">5</div>
            </div>

            <div className="flex gap-1">
                <div>You are considered</div>
                <div className="font-bold">{bmiType}</div>
            </div>
            
        </div>

    )
}