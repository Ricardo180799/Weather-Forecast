"use client"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Tiempo from "./Aplicacion";
import  regionReducer  from "./regionSlice";
import  infoForecastReducer from "./infoForecastSlice"
import  infoArchiveReducer from "./infoArchive"  



const store = configureStore({reducer:{region : regionReducer,infoF:infoForecastReducer,infoA:infoArchiveReducer}})

export default function Metereologia(){
    return(<Provider store={store}><Tiempo/></Provider>)
}
