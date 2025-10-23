"use client"
import { DateTime } from "luxon";
import Image from "next/image";
import { useSelector } from "react-redux";


export default function EntregarDia({ time = [], adelanto = 0, timeZone, code, min = "", max = "" }) {
  const reg = useSelector(state => state.region)
  
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
      {code == 0 && <Image src="/icon-sunny.webp" alt="sunny" width={40} height={40} />}
      {code >= 1 && code <= 3 && <Image src="/icon-partly-cloudy.webp" alt="partly cloudy" width={40} height={40} />}
      {code >= 45 && code <= 48 && <Image src="/icon-fog.webp" alt="fog" width={40} height={40} />}
      {code >= 51 && code <= 57 && <Image src="/icon-drizzle.webp" alt="drizzle" width={40} height={40} />}
      {code >= 61 && code <= 67 && <Image src="/icon-rain.webp" alt="rain" width={40} height={40} />}
      {code >= 71 && code <= 77 && <Image src="/icon-snow.webp" alt="snow" width={40} height={40} />}
      {code >= 80 && code <= 99 && <Image src="/icon-storm.webp" alt="storm" width={40} height={40} />}
      <div className=" flex"> <h4 className=" text-sm
      sm:text-base
      xl:mr-4 lg:text-sm xl:text-base lg:p-2  md:p-1">{poner1}</h4>  <h4 className="ml-4 text-sm lg:text-sm
      sm:text-base
      xl:text-base lg:p-1  md:p-1">{poner2}</h4> </div>
    </div>)
}