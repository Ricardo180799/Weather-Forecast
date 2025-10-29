"use client"
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";



export default function Hora(){
   const tz = useSelector(state =>state.region?.carga?.data?.[0]?.results?.[0].timezone || "") 
   
  
   

   const formatted = tz ? DateTime.now().setZone(tz).toFormat("cccc, LLLL dd, yyyy"): null

    return(
    <>
    {formatted && <h2 className="text-base text-center mt-1 ">{formatted}</h2>}
    </>)
}



    
