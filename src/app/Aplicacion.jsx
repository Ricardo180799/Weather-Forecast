"use client"
import { DateTime } from "luxon";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import {insertar} from "./regionSlice"
import { useState } from "react";
import {iniciar} from "./infoForecastSlice"
import Con from "./Contenedor2"
import Con1 from "./Contenedero1"
import {fetchF} from "./infoForecastSlice"
import {fetchh} from "./regionSlice"
import {fetchA} from "./infoArchive"
import Menu   from "./MenuRegiones"
import MenuGrados from "./MenuGrados";
import EntregarDia from "./EntregarDia";
import {integracion} from "./Integracion"
import GetUbication from "./getUbication"
import MenuFavoritos from "./MenuFavoritos";
import Link from "next/link";



export default function Tiempo() {
  const [focus, setFocus] = useState(false);
  const [mostrar, setMostrar] = useState(false)
  const [favoritos,isFavoritos] = useState(false)
  const dispatch = useDispatch()
  const region = useSelector(state =>state.region.region[0])
   const reg = useSelector(state =>state.region)

  const cargaR = useSelector(state =>state.region.carga)
   const infoFD = useSelector(state =>state.infoF.start)
  const infoFf = useSelector(state =>state.infoF.carga)
  const infoAa = useSelector(state =>state.infoA.carga)
  
  const weatherCode = infoFf?.data[0]?.daily?.wheatercode
    const timezone = infoFf?.data[0]?.timezone
       const diad = DateTime.now().setZone( timezone)
       const dian = diad.toFormat("cccc") 
  

    
  
  return (
    <div className=" flex  justify-center items-center h-full w-full bg-white  ">
      <div className="bg-[hsl(243,96%,9%)] flex grow   h-full  max-w-[96%]       flex-col mt-3">
        <div className="flex mt-8  lg:ml-10
        ">
          <Image
            className=" m-2   -translate-y-6
            sm: w-[200]  sm: h-[70] sm:-translate-y-6 sm:ml-8
            lg:w-[260]  lg:h-[130] lg:-translate-y-12 lg:ml-0
            xl:w-[300]  xl:h-[160] xl:ml- xl:-translate-y-15"

            src="/logo.svg"
            alt="Logo"
            width={150}
            height={60}
          />
              
          <div   tabIndex={0}  onFocus={() => setMostrar(true)} onBlur={() => setMostrar(false)}  className="flex  ml-auto mr-3 border  items-center rounded-xl hover:scale-110 bg-[hsl(243,27%,20%)]    h-8
          sm:h-12 sm:mr-8
          lg:h-12 lg:mr-15
           xl:mr-30">
            <Image
              className="mx-2 text-white"
              src="/icon-units.svg"
              alt="Logo"
              width={20}
              height={20}
            />
            <span className="mr-2 text-white">Units</span>
            <ChevronDown className="w-4 h-4 text-white" />
            {mostrar && < MenuGrados />}
          </div>
        </div>
         <div className=" flex mt-2 mx-auto w-[full] lg:absolute lg:translate-x-80 lg:translate-y-6
         xl:ml-20">
                  <GetUbication/>
                  <div className="flex items-center justify-center w-26 h-10 sm:w-32 sm:h-12 md:w-36 md:h-12 bg-blue-600 rounded-xl         hover:border border-black hover:scale-105 text-white font-medium transition-transform mx-2
                  xl:w-40"
                  onClick={()=> isFavoritos(prev => !prev)}>
                    {favoritos && <  MenuFavoritos setFocus={setFocus}/>}
                    Favoritos
                  </div>
                  <Link href={"./Comparacion"} className="flex items-center justify-center w-26 h-10 sm:w-32 sm:h-12 md:w-36 md:h-12 bg-blue-600 rounded-xl hover:border border-black hover:scale-105 text-white font-medium transition-transform mr-2
                  xl:w-40">Comparar</Link>
                  </div>
        <h2  className="self-center mt-10 translate-y-0.5 mb-4 text-3xl text-center    font-bold   
         w-[180px]
         sm:w-[320px] sm:text-5xl
         lg:w-[400px] lg:text-5xl lg:mt-0
         xl:w-[2000px] xl:text-5xl   " >
          How's the sky looking today?
        </h2>
      <div className="flex flex-col mx-auto w-[96%]">
        <div className="flex self-center  w-[98%] flex-col   items-center
        sm:flex-row

        md:flex-row md:ml-6">
          <div className="flex   h-[35px] border border-gray-500 rounded-xl w-[98%] 
          
           md:w-[460px] md:h-10 ">
            <Image
            className=" ml-3  "
            src="/icon-search.svg"
            alt="Logo"
            width={20}
            height={20}
          />
          <input
            className="ml-3    focus:outline-none w-[300px]" onFocus={()=>setFocus(true) }
           
            placeholder="       Search for a place..." value={region ? region:""} onChange={(e)=>dispatch(insertar({valor:e.target.value,posicion:0}))}
          />

          </div>
          
          <button onClick={()=>integracion(dispatch,region,0 )} className=" flex items-center justify-center border border-gray-500 bg-blue-500 rounded-xl w-[98%] hover:scale-110 mt-2 h-10 
          sm:h-9 sm:mb-2 sm:ml-2
          md:w-40 md:h-10 md:mt-0 md:ml-3">
            Search
          </button>
        </div>
        {focus && <Menu focus={focus} setFocus={setFocus}/>}
           
         </div>     
        
        {/*Bloque 1 */}
        <div className="flex flex-col  w-full mx-auto mt-5 h-auto 
         md:flex-row md:mx-0 md:ml-8 md:w-full
         sm:w-[600] 
        ">
           <Con1/>
          {/* 2 compartimento  */}
          <Con/>
        </div>
      </div>
    </div>
  );
}

