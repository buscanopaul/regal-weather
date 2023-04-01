import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { weatherApi } from "./api";
import { weatherReducer } from "./weatherSlice";

const rootReducer = combineReducers({
    [weatherApi.reducerPath]: weatherApi.reducer,
    weather: weatherReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(weatherApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>

export default store