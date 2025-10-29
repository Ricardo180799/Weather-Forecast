"use client";

import { useState } from "react";
import Link from "next/link";
import {insertar} from "../regionSlice"
import { useDispatch, useSelector } from "react-redux";
import {integracion} from "../Integracion"
import { DateTime } from "luxon";

export default function CompararRegiones() {
 
 const region = useSelector(state => state.region?.region ?? "")
const dispatch = useDispatch()
const carga = useSelector(state=> state?.infoF?.carga ?? "" )
const time = carga?.data?.[1].hourly?.time ?? ""
const timezone1 = carga?.data?.[1].timezone ?? "" 
const timezone2 = carga?.data?.[2].timezone ?? "" 
const hora1 = DateTime.now().setZone(timezone1) ?? ""
const hora2 = DateTime.now().setZone(timezone2) ?? ""
let index1 = ""
let index2 = ""

if(Array.isArray(time)) {
  index1 = time.findIndex(t => DateTime.fromISO(t, { zone: timezone1 }).hour === hora1.hour)
}
if(Array.isArray(time)) {
  index2 = time.findIndex(t => DateTime.fromISO(t, { zone: timezone2 }).hour === hora2.hour)
}

const temperature1 =  carga?.data?.[1].hourly?.temperature_2m?.[index1] ?? ""
const temperature2 =  carga?.data?.[2].hourly?.temperature_2m?.[index2] ?? ""

const precipitation1 =  carga?.data?.[1].hourly?.precipitation?.[index1] ?? ""
const precipitation2 =  carga?.data?.[2].hourly?.precipitation?.[index2] ?? ""

const windspeed1 =  carga?.data?.[1].hourly?.windspeed_10m?.[index1] ?? ""
const windspeed2 =  carga?.data?.[2].hourly?.windspeed_10m?.[index2] ?? ""

const humidity1 =  carga?.data?.[1].hourly?.relative_humidity_2m?.[index1] ?? ""
const humidity2 =  carga?.data?.[2].hourly?.relative_humidity_2m?.[index2] ?? ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-800 to-gray-900 flex flex-col items-center text-white p-6">
      <h2 className="text-3xl font-bold mb-8 mt-4 tracking-wide">
        Comparar regiones
      </h2>

      <div className="flex flex-wrap justify-center gap-10 w-full max-w-5xl">
        {/* Contenedor 1 */}
        <div className="bg-[hsl(243,27%,20%)] p-6 rounded-2xl shadow-lg w-[300px] flex flex-col items-center">
          <div  className="flex flex-col gap-4 w-full">
            <input
              
              value={ region[1] ?? ""}
              onChange={(e)=>{dispatch(insertar({valor:e.target.value,posicion:1}))}}
              type="text"
              placeholder="Nombre de la región"
              className="rounded-xl px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              
              onClick={()=>{integracion(dispatch,region[1],1)}}
              className="bg-indigo-600 hover:bg-indigo-700 rounded-xl py-2 font-semibold transition-all"
            >
              Buscar
            </button>
          </div>

          {/* Estadísticas siempre visibles */}
          <div className="mt-5 grid grid-cols-2 gap-3 w-full text-sm">
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{temperature1}°C</p>
              <p></p>
            </div>
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{precipitation1} IN</p>
              <p></p>
            </div>
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{windspeed1} mph</p>
              <p></p>
            </div>
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{humidity1}%</p>
              <p></p>
            </div>
          </div>
        </div>

        {/* Contenedor 2 */}
        <div className="bg-[hsl(243,27%,20%)] p-6 rounded-2xl shadow-lg w-[300px] flex flex-col items-center">
          <div  className="flex flex-col gap-4 w-full">
            <input
              
              value={ region[2] ?? ""}
              onChange={(e)=>dispatch(insertar({valor:e.target.value,posicion:2}))}
              type="text"
              placeholder="Nombre de la región"
              className="rounded-xl px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={()=>integracion(dispatch,region[2],2)}
              className="bg-indigo-600 hover:bg-indigo-700 rounded-xl py-2 font-semibold transition-all"
            >
              Buscar
            </button>
          </div>

          {/* Estadísticas siempre visibles */}
          <div className="mt-5 grid grid-cols-2 gap-3 w-full text-sm">
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{temperature2}°C</p>
              <p></p>
            </div>
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{precipitation2} IN</p>
              <p></p>
            </div>
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{windspeed2} mph</p>
              <p></p>
            </div>
            <div className="bg-indigo-700/40 p-3 rounded-lg">
              <p className="font-bold">{humidity2}%</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="mt-10 text-indigo-400 hover:text-indigo-300 underline transition-all"
      >
        ← Volver a la página principal
      </Link>
    </div>
  );
}