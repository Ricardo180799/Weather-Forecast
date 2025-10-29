import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchF = createAsyncThunk("infoF/buscar",async({ dato },thunkApi)=>{
    try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dato.results[0].latitude}&longitude=${dato.results[0].longitude}&hourly=temperature_2m,pressure_msl,visibility,uv_index,weathercode,relative_humidity_2m,precipitation,rain,snowfall,windspeed_10m,winddirection_10m,pressure_msl,cloudcover&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,sunrise,sunset,windspeed_10m_max&current_weather=true&forecast_days=8&timezone=${dato.results[0].timezone}`)
        
         if (!res.ok) {
        throw new Error("Error en la respuesta del servidor")};
        const data = await res.json()
        return data
    }catch(error){return thunkApi.rejectWithValue("No se ha podido obtener informacion forecast de la region")}
})




export const infoForecastSlice = createSlice({name:"infoF",initialState:{carga:{data:[[],[],[]],loading:false,error:null},objetivo:null,dia:""},
reducers:{obtenerF: (state,action)=>{state.objetivo = action.payload },iniciar: (state,action)=>{state.dia = action.payload }},
extraReducers: (builder)=>{
    builder
    .addCase(fetchF.pending , (state)=>{state.carga.loading = true,state.carga.error = null})
    .addCase(fetchF.fulfilled , (state,action)=>{
       const  {posicion} = action.meta.arg
        state.carga.loading = false , state.carga.error = null,state.carga.data[posicion] = action.payload})
    .addCase(fetchF.rejected , (state,action)=>{state.carga.loading = false,state.carga.error = action.payload})
}})

export default infoForecastSlice.reducer
export const { iniciar } = infoForecastSlice.actions