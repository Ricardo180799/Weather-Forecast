"use client"
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";


export default function Parte({numero}){
const infoFf = useSelector(state =>state.infoF.carga)
 const weatherCode = infoFf?.data?.daily?.weathercode
 
 
 
 const iconos = ["/icon-drizzle.webp","/icon-fog.webp","/icon-overcast.webp","/icon-partly-cloudy.webp","/icon-rain.webp","/icon-snow.webp","/icon-storm.webp","/icon-sunny.webp"]
  if (!weatherCode || weatherCode[numero] === undefined) return null;

   const code = weatherCode[numero];


 return(
 <>
 {code === 0 && <Image src={"/icon-sunny.webp"} alt="sunny" width={40} height={40}/>}
 {code >= 1  && code <= 3 && <Image src={"/icon-partly-cloudy.webp"} alt="sunny" width={40} height={40}/>}
  {code >= 45  && code <= 48 && <Image src={"/icon-fog.webp"} alt="sunny" width={40} height={40}/>}
   {code >= 51  && code <= 57 && <Image src={"/icon-drizzle.webp"} alt="sunny" width={40} height={40}/>}
    {code >= 61  && code <= 67 && <Image src={"/icon-rain.webp"} alt="sunny" width={40} height={40}/>}
    {code >= 71  && code <= 77 && <Image src={"/icon-snow.webp"} alt="sunny" width={40} height={40}/>}
     {code >= 80  && code <= 99 && <Image src={"/icon-storm.webp"} alt="sunny" width={40} height={40}/>}
 </>)
}