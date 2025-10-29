"use client"
import { useDispatch, useSelector } from "react-redux";
import {insertar} from "./regionSlice"
import {integracion} from "./Integracion"
import { Star } from "lucide-react";
import { favoritoss} from "./regionSlice";
import { useState } from "react"; 
import {filtrado} from "./regionSlice"



export default function Estrella({esFavorito,e,setFocus}){
     const favoritos = useSelector(state => state.region.favoritos)
    const region = useSelector(state => state.region.region)
    const dispatch = useDispatch()
    
    const activado = "w-5 h-5 text-yellow-400 ml-2 mt-0.5 fill-yellow-400"
    const desactivado = "w-5 h-5 text-yellow-400 ml-2 mt-0.5 hover:fill-yellow-400"
    

 return(
     <div  className="flex">
                   <h4 className="focus:scale-110" 
                   onMouseDown={()=>{dispatch(insertar({valor:e.name, posicion:0}));integracion(dispatch,e.name,0);setFocus(false)}} >{e.name}</h4>
                   <Star className={esFavorito ? activado  : desactivado} onClick={()=> {
                    
                   if(esFavorito){ dispatch(filtrado(e.name))}
                   if(!esFavorito){ dispatch(favoritoss(e.name))}
                   
                   
                    
                    }}
                    />
                </div>
 )   
}