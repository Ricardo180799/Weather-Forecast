"use client"
import { useSelector,useDispatch } from "react-redux";
import Metereologia from "./Redux";
import Image from "next/image";
import { DateTime } from "luxon";
import {TiempoReal} from "./ParteH"
import ParteH from "./ParteH"
import { ChevronDown } from "lucide-react";
import MenuDias from "./MenuDias";
import { useState } from "react";
import Temperaturas from "./TemperaturaHorasD"



export default function Con(){
  const [focus,setfocus] = useState(false)
    const Dia = useSelector(state =>state.infoF.dia)
    
   
     return( 
     
     
        
     <div className="flex flex-col h-[480] w-[93%]  bg-[hsl(243,23%,24%)]  rounded-xl ml-3 mt-7 mb-7
     
     md:mt-0 md:ml-4 md:w-[30%] md:h-[797px]
     lg:h-[683]">
      
            <div className="flex w-full h-8 mt-3 ml-3
            md:mb-2">
              <h3 className="lg:text-xl">Hourly forecast </h3>
              <div  tabIndex={0}  onFocus={() => setfocus(true)} onBlur={() => setfocus(false)} className=" flex items-center w-26 h-7 rounded-xl bg-[hsl(243,27%,20%)] ml-auto mr-5 justify-center hover:scale-110 text-center 
              lg:text-xl lg:w-30">
                 {Dia}<ChevronDown className="w-4 h-4 text-white 
                 " />
                 {focus && < MenuDias/>}
              </div>
            </div>
            <div className="  flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  
            lg:h-16">
              <h2 className="my-auto ml-3  "><ParteH numero={0} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={0}/></h2>
              <Temperaturas indicador={0} dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={1} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={1}/></h2>
             <Temperaturas indicador={1}  dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={2} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={2}/></h2>
              <Temperaturas indicador={2}  dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={3} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={3}/></h2>
              <Temperaturas indicador={3}  dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={4} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={4}/></h2>
              <Temperaturas indicador={4}  dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={5} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={5}/></h2>
              <Temperaturas indicador={5}  dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={6} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={6}/></h2>
              <Temperaturas indicador={6}  dia={Dia}/>
            </div>
            <div className=" flex w-10/11 h-10  ml-3 mt-3 rounded-xl bg-[hsl(243,23%,30%)]
            md:h-20  lg:h-16">
              <h2 className="my-auto ml-3"><ParteH numero={7} dia={Dia}/></h2>
              <h2 className="my-auto ml-auto mr-3 
              lg:text-xl"><TiempoReal num={7}/></h2>
              <Temperaturas indicador={7}  dia={Dia}/>
            </div>
          </div>)
        
     




  }