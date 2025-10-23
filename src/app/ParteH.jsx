"use client"
import { useSelector } from "react-redux";
import Image from "next/image";
import { DateTime } from "luxon";


export function TiempoReal({num}){
  const infoFf = useSelector(state => state.infoF.carga);


   const timeZone = infoFf?.data?.timezone
    const tiempoReal = DateTime.now().setZone(timeZone)
    const horas = tiempoReal.hour + num 

     if(horas >= 25){return `${horas - 24} AM`}
     if(horas === 24){return `${horas - 12} AM`}

    if(horas > 12){return `${horas - 12} PM`}
  
    
  
  return  `${horas} AM` }


export default  function  ParteH({ numero, dia = {},indicador = 0}) {
  const infoFf = useSelector(state => state.infoF.carga);



  
  const timesH =  infoFf?.data?.hourly?.time || [];
  const weathercodesH =  infoFf?.data?.hourly?.weathercode || [];
  const timeZone =  infoFf?.data?.timezone  || []
   const tiempoReal =  DateTime.now().setZone(timeZone)
   const temperaturers = infoFf?.data?.hourly?.temperature_2m || []
   
 

  const index =   timesH.findIndex(t =>{ return DateTime.fromISO(t,{zone:timeZone}).hour ===  tiempoReal.hour})

  const indexd = timesH.findIndex(t=>{ return DateTime.fromISO(t,{zone:timeZone}).setLocale("en").toFormat("cccc") === dia})

  const startIndex = indexd >= 0 ? indexd : 0;

 

   

  

  
const start = startIndex  + index
  
  

 
 const next8HoursWeatherCode = weathercodesH?.slice(start , start+8) || null

 
  
 



const code = Number(next8HoursWeatherCode[numero]);

  // Iconos según weathercode
  return (
    
    
    <div className="flex">
      {code === 0 && <Image className=" w-13 h-13  
      lg:w-18 lg:h-18" src="/icon-sunny.webp" alt="sunny" width={40} height={40} />}
      {code >= 1 && code <= 3 && <Image className=" w-13 h-13 
      lg:w-18 lg:h-18" src="/icon-partly-cloudy.webp" alt="partly cloudy" width={40} height={40} />}
      {code >= 45 && code <= 48 && <Image className=" w-13 h-13 
      lg:w-18 lg:h-18" src="/icon-fog.webp" alt="fog" width={40} height={40} />}
      {code >= 51 && code <= 57 && <Image className=" w-13 h-13 
      lg:w-18 lg:h-18" src="/icon-drizzle.webp" alt="drizzle" width={40} height={40} />}
      {code >= 61 && code <= 67 && <Image className=" w-13 h-13 
      lg:w-18 lg:h-18" src="/icon-rain.webp" alt="rain" width={40} height={40} />}
      {code >= 71 && code <= 77 && <Image className=" w-13 h-13 
      lg:w-18 lg:h-18" src="/icon-snow.webp" alt="snow" width={40} height={40} />}
      {code >= 80 && code <= 99 && <Image className=" w-13 h-13 
      lg:w-18 lg:h-18" src="/icon-storm.webp" alt="storm" width={40} height={40} />}
      
    </div>
  );
}