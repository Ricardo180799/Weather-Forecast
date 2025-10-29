import { useDispatch, useSelector } from "react-redux";
import {insertar} from "./regionSlice"
import {integracion} from "./Integracion"




 
export default function MenuFavoritos({setFocus}){
  const favoritos = useSelector(state => state.region.favoritos)
  const region = useSelector(state => state.region.region)
  const dispatch = useDispatch()

  return(
  <div className="flex flex-col items-center   rounded-xl bg-[hsl(243,27%,20%)] w-25 h-56 absolute mt-[280px] overflow-scroll z-20 ">
    {Array.isArray(favoritos) && favoritos.map((f,i)=>{
        return(
        <h3 key={i} onMouseDown={()=>{dispatch(insertar({valor:f,posicion:0}));integracion(dispatch,f,0);setFocus(false)}}> 
            {f}
        </h3>)
    })}

  </div>)

}

