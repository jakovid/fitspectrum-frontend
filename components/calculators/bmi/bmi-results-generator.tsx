export default function BmiResultsGenerator(){
    return(
        <div className="flex flex-col">

            <div className="flex gap-1">
                <div>Your BMI is</div>
                <div className="font-bold">5</div>
            </div>

            <div className="flex gap-1">
                <div>You are considered</div>
                <div className="font-bold">obese</div>
            </div>
            
        </div>

    )
}