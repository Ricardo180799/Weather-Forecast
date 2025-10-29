"use client"
import { DateTime } from "luxon";
import { fetchF } from "./infoForecastSlice";
import { fetchh } from "./regionSlice";
import { fetchA } from "./infoArchive";
import { iniciar } from "./infoForecastSlice";

export const integracion = async(dispatch,region,posicion) =>{
   
           
           if (!region) {
          
          return;
        }
      
      
        ;
          try{ const regionData = await dispatch(fetchh({dato:region.toUpperCase(),posicion:posicion})).unwrap()
           
          
      
          const [forecastData, archiveData] = await Promise.all([
             dispatch(fetchF({ dato:regionData, posicion: posicion })),
           
            
            
            
          ]);
          console.log(forecastData)
            const timezone = forecastData?.payload?.timezone;
            const diad = DateTime.now().setZone(timezone);
            const dian = diad.toFormat("cccc");

          dispatch(iniciar(dian))
          
          console.log(forecastData)
          
           }catch(error){console.log("Se ha producido un error a la hora de encontrar los datos:",error ); return;}
          
      
      
        }
  