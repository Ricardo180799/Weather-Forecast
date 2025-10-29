"use client"
import {insertar} from "./regionSlice"
import { useDispatch, useSelector } from "react-redux";
import {fetchF} from "./infoForecastSlice"
import { DateTime } from "luxon";
import { iniciar } from "./infoForecastSlice";




export default function GetUbication(){
    const dispatch = useDispatch()
const getUbication = () =>{if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
   async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude,)
       const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
       console.log(timezone)
      const city = timezone.split("/").pop()
      dispatch(insertar({valor:city, posicion:0}))
      const informacion = {
  "results": [
    {
      "latitude": latitude,
      "longitude": longitude,
      "timezone": timezone
    }
  ]
}
      
        const forecastData = await dispatch(fetchF({dato:informacion, posicion:0})).unwrap();
                  const timezones = forecastData?.payload?.data?.timezone;
                  const diad = DateTime.now().setZone(timezones);
                  const dian = diad.toFormat("cccc");
      
                dispatch(iniciar(dian))
                 console.log(forecastData)
                


    },
    (error) => {
      console.error("No se pudo obtener la ubicación:", error);
    
    }
  );
} else {
  console.error("Geolocalización no soportada en este navegador.");
}} 


return(<div className="flex rounded-xl items-center justify-center w-26 h-10 sm:w-32 sm:h-12 md:w-36 md:h-12 bg-blue-600  hover:border border-black hover:scale-105 text-white font-medium transition-transform
  xl:w-40"
onClick={()=>getUbication()}>Ubication</div>)

}