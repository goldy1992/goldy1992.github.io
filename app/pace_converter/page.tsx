'use client'
import TailwindAppBar from "@/components/tailwind_app_bar";
import { useEffect, useState } from "react";

const conversionConst = 1.609344
const ONE_KM = 1
const ONE_MILE = 1.609344
const TWO_KM = 5
const FIVE_KM = 5
const TEN_KM = 10
const FIFTEEN_KM = 15
const TEN_MILE = 16.09
const HALF_MARATHON = 21.1
const MARATHON = 42.2

const SECONDS_IN_HOUR = 60 * 60
const SECONDS_IN_MINUTE = 60

interface RaceTime {
    h: number
    m: number,
    s: number
    dist: number
}

const defaultRaceTime : (dist: number) => RaceTime = (dist: number) => {
    return {
        "h": 0,
        "m": 0,
        "s": 0,
        "dist": dist
    }
}

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

function finishTimeMinKm(
        secondsPerKm: number,
        distance: number) {
    let totalSecs = Math.trunc(secondsPerKm * distance)
    let hours = Math.trunc(totalSecs / (SECONDS_IN_HOUR))
    totalSecs -= (hours * SECONDS_IN_HOUR)
    let mins = Math.trunc(totalSecs / SECONDS_IN_MINUTE)
    let seconds = totalSecs - (mins * SECONDS_IN_MINUTE)
    return [hours, mins, seconds]
}



export default function PageContent() : JSX.Element {

    // input
    const [inputHours, setInputHours] = useState(0)
    const [inputMinutes, setInputMinutes] = useState(0)
    const [inputSeconds, setInputSeconds] = useState(0)
    const [isKm, setIsKm] = useState(true)
    // output
    const [outputHours, setOutputHours] = useState(0)
    const [outputMinutes, setOutputMinutes] = useState(0)
    const [outputSeconds, setOutputSeconds] = useState(0)

    const [km1Time, setKm1ime] = useState(defaultRaceTime(HALF_MARATHON))
    const [km5Time, setKm5Time] = useState(defaultRaceTime(FIVE_KM))
    const [km10Time, setKm10Time] = useState(defaultRaceTime(TEN_KM))
    const [km15Time, setKm15Time] = useState(defaultRaceTime(FIFTEEN_KM))
    const [mile10Time, setMile10Time] = useState(defaultRaceTime(TEN_MILE))
    const [hMarathonTime, setHMarathonTime] = useState(defaultRaceTime(HALF_MARATHON))
    const [marathonTime, setMarathonTime] = useState(defaultRaceTime(MARATHON))

    const update = () => {
        let totalSecPerKm, totalSecPerMile
        if (isKm) {
            totalSecPerKm = (inputHours * SECONDS_IN_HOUR) 
                            + (inputMinutes * SECONDS_IN_MINUTE) 
                            + inputSeconds
            totalSecPerMile = totalSecPerKm * conversionConst
        } else {
            totalSecPerMile = (inputHours * SECONDS_IN_HOUR) 
                            + (inputMinutes * SECONDS_IN_MINUTE) 
                            + inputSeconds
            totalSecPerKm = totalSecPerMile / conversionConst
        }
        let [h, m, s] = convertSpeed(inputHours, inputMinutes, inputSeconds, isKm)
        setOutputHours(h)
        setOutputMinutes(m)
        setOutputSeconds(s)
        
        let [hMarathonH, hMarathonM, hMarathonS] = finishTimeMinKm(totalSecPerKm, HALF_MARATHON)
        setHMarathonTime({
            "h": hMarathonH,
            "m": hMarathonM,
            "s": hMarathonS,
            "dist": HALF_MARATHON
        })

        let [marathonH, marathonM, marathonS] = finishTimeMinKm(totalSecPerKm, MARATHON)
        setMarathonTime({
            "h": marathonH,
            "m": marathonM,
            "s": marathonS,
            "dist": MARATHON
        })
    }

    useEffect(() => {
        update()
    }, [inputHours, inputMinutes, inputSeconds, isKm])

    return (
      <main> 
        <div id="home" />
        <TailwindAppBar />
        <div className='grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-4 bg-yellow-500 px-4 pt-12'>   
    
    
            <span className="flex-none sm:col-span-4 text-xl font-bold leading-10">Convert Running Paces</span>
            <span className="flex-none sm:col-span-6 text-lg">Input</span>

            <div className="sm:col-span-2">
                <label htmlFor="hours" className="block text-sm font-medium leading-6 text-gray-900">Hours</label>
                <input type="text" inputMode="numeric" id="hours" placeholder="hours"
                className="pl-2 py-2 border-0 rounded-md sm:leading-6 ring-1 focus:ring-inset text-sm"
                onChange={(hrs : any) => {
                    let number = Number(hrs.currentTarget.value)
                    if (!isNaN(number)) {
                        setInputHours(number)
                    }
                }}/>
            </div>
            
            <div className="sm:col-span-2">
                <label htmlFor="minutes" className="block text-sm font-medium leading-6 text-gray-900">Minutes</label>
                <input type="text" id="minutes" placeholder="minutes" 
                className="pl-2 py-2 border-0 rounded-md sm:leading-6 ring-1 focus:ring-inset text-sm"
                onChange={(mins) => {
                    let number = Number(mins.currentTarget.value)
                    if (!isNaN(number)) {
                        setInputMinutes(number)
                    }
                }}/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="seconds" className="block text-sm font-medium leading-6 text-gray-900">Seconds</label>
                <input type="text" id="seconds" placeholder="seconds" 
                className="pl-2 py-2 border-0 rounded-md sm:leading-6 ring-1 focus:ring-inset text-sm"
                onChange={(secs : any) => {
                    let number = Number(secs.currentTarget.value)
                    if (!isNaN(number)) {
                        setInputSeconds(number)
                    }
                }}/>
            </div>
       
            <div className="sm:col-span-6">
            <span className="block">Units</span>
            <div className="flex items-center gap-x-3">
                <input type="radio" id="minPerKm" checked={isKm} onChange={() => setIsKm(true) } />
                <label htmlFor="minPerKm" className="pr-2">min/km</label>
            </div>
            <div className="flex items-center gap-x-3">
                <input type="radio" id="minPerMile" checked={!isKm} onChange={() => setIsKm(false) }/>
                <label htmlFor="minPerMile">min/mile</label>
            </div>
        </div>
        <div className="sm:col-span-4">
            <span className="block text-m">Pace per {isKm ? "mile" : "km"}</span>
            <span className="block text-m font-bold">{outputHours + "h " + outputMinutes + "m " + outputSeconds + "s"} </span>
        </div>
        <div className="sm:col-span-4">

            <table className="table-auto border-collapse border border-slate-500 w-full">
                <thead>
                    <tr className="border-collapse border border-slate-500">
                        <th rowSpan={2}className="border-collapse border border-slate-500">Race Distance</th>
                        <th colSpan={3}className="border-collapse border border-slate-500">Time</th>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-collapse border border-slate-500">h</th>
                        <th>m</th>
                        <th>s</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border-collapse border border-slate-500">Half Marathon</td>
                    <td className="border-collapse border border-slate-500 text-center">{hMarathonTime.h}</td>
                    <td className="border-collapse border border-slate-500 text-center">{hMarathonTime.m}</td>
                    <td className="border-collapse border border-slate-500 text-center">{hMarathonTime.s}</td>
                </tr>
                <tr>
                <td className="border-collapse border border-slate-500">Marathon</td>
                    <td className="border-collapse border border-slate-500 text-center">{marathonTime.h}</td>
                    <td className="border-collapse border border-slate-500 text-center">{marathonTime.m}</td>
                    <td className="border-collapse border border-slate-500 text-center">{marathonTime.s}</td>

                </tr>
                </tbody>
            </table>
        </div>
   
    </div>

    </main>
)}  