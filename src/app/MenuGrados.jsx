import { useState,useEffect } from "react";
import {changeGrados,changeWind,changePrecipitation} from "./regionSlice"
import { useDispatch } from "react-redux";

export default function MenuGrados(){
      
       
    const active = "bg-[hsl(243,23%,30%)] rounded-xl mt-2 focus:scale-110"
    const [c,setC] = useState(true)
    const [mph,setMph] = useState(true)
    const [preci,setPreci] = useState(true)
    const dispatch = useDispatch()
    
   useEffect(() => {
    dispatch(c ? changeGrados("c") : changeGrados("f"));
  }, [c]);

  useEffect(() => {
    dispatch(mph ? changeWind("mph") : changeWind("km/h"));
  }, [mph]);

  useEffect(() => {
    dispatch(preci ? changePrecipitation("IN") : changePrecipitation("mm"));
  }, [preci]);
    

    return(
    <div className="flex flex-col items-center   rounded-xl bg-[hsl(243,27%,20%)] w-32 h-56 absolute mt-[280px] overflow-scroll">
        <h4 className="font-bold   text-center">Switch to Imperial</h4>
        <h3 className=" mt-2">Temperature</h3>
        <h3  onClick={() => {setC(prev => !prev)}} className={c ? active : "mt-2 focus:scale-110"}>Celsius(°C)</h3>
        <h4  onClick={() => {setC(prev => !prev)}} className={!c ? active : "mt-2 focus:scale-110"} >Fahrenheit(°F)</h4>
        <hr className="border-gray-300 my-4" />
        <h4>Windd Speed</h4>
        <h4 onClick={()=>{setMph(prev => !prev) }} className={!mph ? active : "mt-2 focus:scale-110"}  >km/h</h4>
        <h4 onClick={()=>{setMph(prev => !prev); }} className={mph ? active : "mt-2 focus:scale-110"} >mph</h4>
         <hr className="border-gray-300 my-4" />
         <h4>Precipitation</h4>
         <h4 onClick={()=>{setPreci(prev => !prev); }} className={!preci ? active : "mt-2 focus:scale-110"} >Millimeters(mm)</h4>
         <h4 onClick={()=>{setPreci(prev => !prev); }} className={preci ? active : "mt-2 focus:scale-110"} >Inches(in)</h4>

    </div>)
}