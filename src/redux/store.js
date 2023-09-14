import { configureStore } from "@reduxjs/toolkit";
import { countriesListReducer } from "./countryListSlice";

export const store = configureStore({
    reducer: {
        countries: countriesListReducer,
    },
})