import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    lat: 0,
    long: 0,
    location: [],
    forecast: []
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setLat: (state, action) => {
            state.lat = action.payload
        },
        setLong: (state, action) => {
            state.long = action.payload
        },
        setLocation: (state,action) => {
            state.location = action.payload
        },
        setForeCast: (state,action) => {
            state.forecast = action.payload
        }
    }
})

export const { setLocation, setForeCast, setLat, setLong } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer