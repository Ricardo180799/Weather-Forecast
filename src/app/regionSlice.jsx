import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


   export const fetchh = createAsyncThunk("region/fetch",
    async ({dato},thunkAPI) =>{ try{ const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${dato}&count=1&language=es`)
    if(!res.ok){return thunkAPI.rejectWithValue("No se pudo obtener la region")}

    const data = await res.json()
    return data


   

    

}catch(error){return thunkAPI.rejectWithValue(error.message)}
       
    }
)


export  const regionSlice = createSlice({name:"region",initialState: {region :[[],[],[]],carga:{ data:[[],[],[]], loading: false, error: null },conversion : {grados: "c", windSpeed: "mph",precipitation : "IN"},favoritos:[] }, reducers:{
insertar : (state,action)=> {
   const { valor, posicion } = action.payload
    state.region[posicion] = valor}, 
changeGrados : ((state,action)=>{state.conversion.grados = action.payload}),
changeWind : ((state,action)=>{state.conversion.windSpeed = action.payload}),
changePrecipitation : ((state,action)=>{state.conversion.precipitation = action.payload}),
favoritoss: ((state,action)=>{state.favoritos = [...(state.favoritos || []),action.payload]}),
filtrado: ((state,action)=>{state.favoritos = state.favoritos.filter(t => t != action.payload)})}


 ,extraReducers: (builder)=>{
    builder
    .addCase( fetchh.pending, (state)=>{state.carga.loading = true; state.carga.error = null})
    .addCase(fetchh.fulfilled, (state,action)=>{
        const {posicion} = action.meta.arg
        state.carga.loading = false; state.carga.data[posicion] = action.payload})
    .addCase(fetchh.rejected, (state,action)=>{state.favoritos.filter(e => e !== action.payload)})

    

 
} })
export const { insertar,changeGrados,changeWind,changePrecipitation,favoritoss,filtrado } = regionSlice.actions

export default  regionSlice.reducer;