
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { DateTime } from "luxon";

export const fetchA = createAsyncThunk("infoA/buscar",async(dato,thunkApi)=>{
    try{
        const lat = dato.results[0].latitude;
        const lon = dato.results[0].longitude
        const timezone = dato.results[0].timezone || "UTC";
        
         
        const tz = dato.results[0].timezone;
         const nowInRegion = DateTime.now().setZone(tz);
         const sevenDaysLater = nowInRegion.plus({ days: 6 })

         const start_date = nowInRegion.toISODate()
          const end_date = sevenDaysLater.toISODate()


       


       const url = `https://archive-api.open-meteo.com/v1/era5?latitude=40.4165&longitude=-3.7038&start_date=2024-10-01&end_date=2024-10-07&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe/Madrid`;
        const res = await fetch(url)
        
         if (!res.ok) {
        throw new Error("Error en la respuesta del servidor")};
        const data = await res.json()
        return data
    }catch(error){return thunkApi.rejectWithValue("No se ha podido obtener informacion Archive de la region")}
})




export const infoArchivetSlice = createSlice({name:"infoA",initialState:{carga:{data:null,loading:false,error:null},objetivo:null},
reducers:{obtenerA: (state,action)=>{state.objetivo = action.payload }},
extraReducers: (builder)=>{
    builder
    .addCase(fetchA.pending , (state)=>{state.carga.loading = true,state.carga.error = null})
    .addCase(fetchA.fulfilled , (state,action)=>{state.carga.loading = false,state.carga.error = null,state.carga.data = action.payload})
    .addCase(fetchA.rejected , (state,action)=>{state.carga.loading = false,state.carga.error = action.payload})
}})

export default infoArchivetSlice.reducer