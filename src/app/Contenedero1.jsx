"use client"  

import { DateTime } from "luxon";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {cities} from "./MenuRegiones"
import VariablesRelativas from "./VariablesRealativa"
import Hora from "./ZonaHoraria"
import Parte from"./ParteDia"
import { useState } from "react";
import EntregarDia from "./EntregarDia"
  



export default function Con1(){
    const [focus, setFocus] = useState(false);
   
    const region = useSelector(state =>state.region.region)
    const reg = useSelector(state =>state.region)
    const infoFf = useSelector(state =>state.infoF.carga)
    const viento = infoFf?.data?.daily?.windspeed_10m_max[0]  || ""
    
     
    const temp = infoFf?.data?.current_weather?.temperature
    const conver = temp * 9/5 +32
    const poner5 = reg?.conversion?.grados === "c" ? `${temp}°C`: `${Math.round(conver,2) }°F`

    const {temperaturer,humidity,wind,precipitations} = VariablesRelativas()

    const num1 = temperaturer ? Number(temperaturer) : 0
    const convertir1 =  num1 * 9 / 5 + 32
    const grados = reg?.conversion?.grados === "c" ? `${temperaturer}°C` : `${Math.round(convertir1,2)}°F`

    const num2 = precipitations ? Number( humidity) : 0
    const  convertir2 = num2 * 25.4
    const convertir21 = `${ Math.round(convertir2)} mm`
    const lluvia = reg?.conversion?.precipitation === "IN" ? `${precipitations} in` : convertir21

    const num3 = viento ? Number(viento) : 0
    const convertir3  = num3 * 1.60
    const convertir31 =  `${ Math.round(convertir3)} km/h`
    
    const vientos =reg?.conversion?.windSpeed === "mph" ? `${viento} mph`: convertir31

    

     const timeZone =  infoFf?.data?.timezone  || []
    const Dia =  infoFf?.data?.daily?.time || []
    const tiempo = infoFf?.data?.hourly?.time || []
    const firsTime = Dia[0]
    const Diaa = DateTime.fromISO(Dia,{zone:timeZone}).weekday
     const weathercode =  infoFf?.data?.daily?.weathercode || []
   
     const min = infoFf?.data?.daily?.temperature_2m_min || []
     const max = infoFf?.data?.daily?.temperature_2m_max || []

  
    return( 
   <div className="flex flex-col w-full h-auto
   md:w-[62%] ">
            <div className="flex flex-col w-[96%] h-52  bg-[url('/bg-today-large.svg')] bg-cover bg-center rounded-xl ml-1 items-center
            md:w-full
            lg:flex-row ">
              <div className="flex flex-col my-auto ml-3 items-center lg:mb-20">
                {cities.map(e =>{if(e.name.toLowerCase() === region.toLowerCase()){return (<h3 key={e.name} className=" text-2xl font-bold text-center mt-5">{e.country},{e.name}</h3>)}})}
                <Hora/>
                
                
              </div>
              <div className="flex mb-5 items-center mr-10 lg:ml-auto">
                     {weathercode[0] == 0 && <Image src="/icon-sunny.webp" alt="sunny" width={90} height={90} />}
                           {weathercode[0] >= 1 && weathercode[0] <= 3 && <Image src="/icon-partly-cloudy.webp" alt="partly cloudy" width={90} height={90} />}
                           {weathercode[0] >= 45 && weathercode[0] <= 48 && <Image src="/icon-fog.webp" alt="fog" width={90} height={90} />}
                           {weathercode[0] >= 51 && weathercode[0] <= 57 && <Image src="/icon-drizzle.webp" alt="drizzle" width={90} height={90} />}
                           {weathercode[0] >= 61 && weathercode[0] <= 67 && <Image src="/icon-rain.webp" alt="rain" width={90} height={90} />}
                           {weathercode[0] >= 71 && weathercode[0] <= 77 && <Image src="/icon-snow.webp" alt="snow" width={90} height={90} />}
                           {weathercode[0] >= 80 && weathercode[0] <= 99 && <Image src="/icon-storm.webp" alt="storm" width={90} height={90} />}
                      <h3 className="font-bold text-5xl mt-2 ml-3">{poner5}</h3>
              </div>        
            </div>
            {/*2 fila estadisticas*/}
            <div className="ml-2 w-[95%] h-auto flex mt-5 flex-wrap gap-3 
            md:w-full">
              <div className="max-w-40 flex flex-col grow min-w-39 text-center h-20 bg-[hsl(243,23%,24%)] rounded-xl  
              md:max-w-60 md:min-w-30 md:w-40">
                <h3 className="mt-2 ml-3">Feels Like</h3>
                <h3 className="mt-2 ml-3">{grados}</h3>
              </div>
              <div className="max-w-40 flex flex-col grow min-w-39 text-center h-20 bg-[hsl(243,23%,24%)] rounded-xl  
              md:max-w-60 md:min-w-30 md:w-40">
                <h3 className="mt-2 ml-3">Humidity</h3>
                <h3 className="ml-3">{humidity}%</h3>
              </div>
              <div className="max-w-40 flex flex-col grow min-w-39 text-center h-20 bg-[hsl(243,23%,24%)] rounded-xl   
              md:max-w-60 md:min-w-30 md:w-40">
                <h3 className="mt-2 ml-3">Wind</h3>
                <h3 className="ml-3">{vientos} </h3>
              </div>
              <div className="max-w-40 flex flex-col grow min-w-39 text-center h-20 bg-[hsl(243,23%,24%)] rounded-xl   
              md:max-w-60 md:min-w-30 md:w-40">
                <h3 className="mt-2 ml-3">Precipitations</h3>
                <h3 className="ml-3">{lluvia} </h3>
              </div>
            </div>

            {/*3 fila de estadisticas*/}
            <h4 className="text-md mt-7 ml-3">Daily forecast </h4>
            <div className="flex w-full h-auto mt-5 gap-3 flex-wrap ml-2">
               <EntregarDia timeZone={timeZone} adelanto={0} time={Dia} code={ weathercode[0]} min={min[0]} max={max[0]}/>
              <EntregarDia timeZone={timeZone} adelanto={1} time={Dia} code={ weathercode[1]}  min={min[1]} max={max[1]}/>
             <EntregarDia timeZone={timeZone} adelanto={2} time={Dia} code={ weathercode[2]}  min={min[2]} max={max[2]}/>
              <EntregarDia timeZone={timeZone} adelanto={3} time={Dia} code={ weathercode[3]}  min={min[3]} max={max[3]}/>
               <EntregarDia timeZone={timeZone} adelanto={4} time={Dia} code={ weathercode[4]}  min={min[4]} max={max[4]}/>
              <EntregarDia timeZone={timeZone} adelanto={5} time={Dia} code={ weathercode[5]}  min={min[5]} max={max[5]}/>
             <EntregarDia timeZone={timeZone} adelanto={6} time={Dia} code={ weathercode[6]}  min={min[6]} max={max[6]}/>
            </div>
          </div>)
}