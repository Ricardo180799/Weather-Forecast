"use client"
import { DateTime } from "luxon";
import Image from "next/image";
import { useSelector } from "react-redux";


export default function EntregarDia({ time = [], adelanto = 0, timeZone, code, min = "", max = "" }) {
  const reg = useSelector(state => state.region)
  const region = useSelector(state => state.region.region[0] ?? "")

  
  const Dia = time && time[adelanto] ? DateTime.fromISO(time[adelanto], { zone: timeZone }).setLocale("en").toFormat("ccc") : ""

  const minima = min
  const conversion1 = minima * 9 / 5 + 32
  const con1 = `${Math.round(conversion1,2) }°F`
  const poner1 = reg?.conversion?.grados === "c" ? `${minima}°C` : con1

  const maxima = min
  const conversion2 = maxima * 9 / 5 + 32
  const con2 = `${Math.round(conversion2,2) }°F`
  const poner2 = reg?.conversion?.grados === "c" ? `${maxima}°C` : con2





  return (
    <div className="flex flex-col min-w-10   max-w-23 mx-1 h-25 bg-[hsl(243,23%,24%)] rounded-xl items-center  grow 
    sm:min-w-40
    md:max-w-[220px] md:min-w-[146px] 
    ">
      <h4 className="mt-1 ">{Dia} </h4>
      {code == 0 && <Image className="lg: size-11" src="/icon-sunny.webp" alt="sunny" width={40} height={40} />}
      {code >= 1 && code <= 3 && <Image className="lg: size-11" src="/icon-partly-cloudy.webp" alt="partly cloudy" width={40} height={40} />}
      {code >= 45 && code <= 48 && <Image className="lg: size-11" src="/icon-fog.webp" alt="fog" width={40} height={40} />}
      {code >= 51 && code <= 57 && <Image className="lg: size-11" src="/icon-drizzle.webp" alt="drizzle" width={40} height={40} />}
      {code >= 61 && code <= 67 && <Image className="lg: size-11" src="/icon-rain.webp" alt="rain" width={40} height={40} />}
      {code >= 71 && code <= 77 && <Image className="lg: size-11" src="/icon-snow.webp" alt="snow" width={40} height={40} />}
      {code >= 80 && code <= 99 && <Image className="lg: size-11" src="/icon-storm.webp" alt="storm" width={40} height={40} />}
      <div className=" flex"> <div className=" text-xs
      sm:text-base
      lg:text-xl
      xl:mr-4 
         lg:p-2  md:p-1">{region == "" ?<h4 className=" text-xs
      sm:text-base
      lg:text-xl
      xl:mr-4 
         lg:p-2  md:p-1">°C</h4>  :poner1}</div>  <div className="ml-4 text-xs 
      sm:text-base
      lg:text-xl 
       lg:p-2  md:p-1">{region == "" ?<h4 className=" text-xs
      sm:text-base
      lg:text-xl
      xl:mr-4 
         lg:p-2  md:p-1">°C</h4>  :poner2}</div> </div>
    </div>)
}