"use client"
import { useSelector,useDispatch } from "react-redux";
import {iniciar} from "./infoForecastSlice"





export default function MenuDias(){
     const dispatch = useDispatch()
     const dia = useSelector((state) =>state.infoF.dia)
const dias = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    return(
    <div className="mt-[280px] absolute flex flex-col items-center w-24 h-60 rounded-xl bg-[hsl(243,27%,20%)] ml-auto  justify-center 
    md:h-80 md:mt-[358px] lg:w-28"  > 

    {dias.map((e,i)=>(
        <h2 className=" flex border border-black mt-2 hover:scale-110 md:size-20 items-center justify-center text-center rounded-xl " onClick={() =>{dispatch(iniciar(e))}} key={i}>{e}</h2>
    ))}
    </div> )
}