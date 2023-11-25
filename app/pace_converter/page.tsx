'use client'
import TailwindAppBar from "@/components/tailwind_app_bar";
import { useEffect, useState } from "react";

const conversionConst = 1.609344

function convertSpeed(
    hours : number, 
    minutes: number, 
    seconds: number, 
    isKm: boolean) {
    let totalSecs = (hours * 60 * 60) + (minutes * 60) + seconds
    let modifier = isKm ? (totalSecs * conversionConst) : (totalSecs / conversionConst)
    let outputHours = Math.trunc(modifier / (60 * 60))
    modifier -= (outputHours * 60 * 60)
    let outputMins = (minutes > 0 ) ? Math.trunc(modifier / 60) : 0
    let ouputSecs = Math.ceil(modifier) % 60
    return [outputHours, outputMins, ouputSecs]
}



export default function PageContent() : JSX.Element {
    // // input
    // const [inputHours, setInputHours] = useState(0)
    // const [inputMinutes, setInputMinutes] = useState(0)
    // const [inputSeconds, setInputSeconds] = useState(0)

    // input
    const [inputHours, setInputHours] = useState(0)
    const [inputMinutes, setInputMinutes] = useState(0)
    const [inputSeconds, setInputSeconds] = useState(0)
    const [isKm, setIsKm] = useState(true)
    // output
    const [outputHours, setOutputHours] = useState(0)
    const [outputMinutes, setOutputMinutes] = useState(0)
    const [outputSeconds, setOutputSeconds] = useState(0)

    const update = () => {
        let [h, m, s] = convertSpeed(inputHours, inputMinutes, inputSeconds, isKm)
        setOutputHours(h)
        setOutputMinutes(m)
        setOutputSeconds(s) 
    }

    useEffect(() => {
        update()
    }, [inputHours, inputMinutes, inputSeconds, isKm])

    return (
      <main> 
        <div id="home" />
        <TailwindAppBar />
        <div className='grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4 bg-yellow-500 px-4 pt-12'>   
            <span className="flex-none sm:col-span-4">Time</span>

            <div className="sm:col-span-4">
                    <label htmlFor="hours" className="block text-sm font-medium leading-6 text-gray-900">Hours</label>
                    <input type="text" inputMode="numeric" id="hours" placeholder="hours"  onChange={(hrs : any) => {
                        let number = Number(hrs.currentTarget.value)
                        if (!isNaN(number)) {
                            setInputHours(number)
                        }
                    }}/>
            </div>
            
            <div className="sm:col-span-4">
                <label htmlFor="minutes" className="block text-sm font-medium leading-6 text-gray-900">Minutes</label>
                <input type="text" id="minutes" placeholder="minutes" onChange={(mins) => {
                    let number = Number(mins.currentTarget.value)
                    if (!isNaN(number)) {
                        setInputMinutes(number)
                    }
                }}/>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor="seconds" className="block text-sm font-medium leading-6 text-gray-900">Seconds</label>
                <input type="text" id="seconds" placeholder="seconds" onChange={(secs : any) => {
                    let number = Number(secs.currentTarget.value)
                    if (!isNaN(number)) {
                        setInputSeconds(number)
                    }
                }}/>
            </div>
       
            <div className="sm:col-span-4">
            <span>Units</span>
                <label>min/km</label>
                <input type="radio" checked={isKm} onChange={() => setIsKm(true) } />
                <label>min/mile</label>
                <input type="radio" checked={!isKm} onChange={() => setIsKm(false) }/>
              </div>
              <div className="sm:col-span-4">
                <span className="block">Output</span>
                <span>{outputHours + ":" + outputMinutes + ":" +  outputSeconds + " " + (isKm ? "min/mile" : "min/km")}</span>
    </div>
</div>
          </main>
)}  