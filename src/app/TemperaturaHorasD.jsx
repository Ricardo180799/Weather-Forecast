"use client"
import { useSelector } from "react-redux";

import { DateTime } from "luxon";

export default function Temperaturas({indicador=0, dia=""}){  
const infoFf = useSelector(state => state.infoF.carga)
const reg = useSelector(state => state.region)    
const timesH =  infoFf?.data[0]?.hourly?.time || [];
const timeZone =  infoFf?.data[0]?.timezone  || []
const tiempoReal =  DateTime.now().setZone(timeZone)
const temperaturers = infoFf?.data[0]?.hourly?.temperature_2m || []
const index =   timesH.findIndex(t =>{ return DateTime.fromISO(t,{zone:timeZone}).hour ===  tiempoReal.hour})
const indexd = timesH.findIndex(t=>{ return DateTime.fromISO(t,{zone:timeZone}).setLocale("en").toFormat("cccc") === dia})
const startIndex = indexd >= 0 ? indexd : 0;
const start = startIndex  + index + indicador
const real = temperaturers[start]

const convertir = real * 9/5 +32
const poner3 = reg.conversion.grados === "c" ? `${real}°C` : `${Math.round(convertir,2)}°F`


 return(
     <h2 className="my-auto ml-auto mr-3
              lg:text-xl">{poner3 }</h2>
 )
}
