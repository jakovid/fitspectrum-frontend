export default function BuildMetricInput(){
    return(
        <div className="flex flex-col gap-2 justify-center items-center">

        <div className="grid grid-cols-3 gap-2 w-full">
            <label className="col-span-1">weight:</label>
            <div className="col-span-2 flex gap-2">
                <input type="number" className="text-black w-12 pl-1" />
                <div>kg</div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full">
            <label className="col-span-1">height:</label>
            <div className="col-span-2 flex gap-2">
                <input type="number" className="text-black w-12 pl-1"></input>
                <div>cm</div>
            </div>
        </div>

        <span className="bg-gray-400 px-4 py-1 w-full text-center rounded-s-full rounded-e-full hover:bg-white hover:text-black">Calculate BMI</span>
    </div>

    )
}