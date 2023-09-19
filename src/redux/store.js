import { configureStore } from "@reduxjs/toolkit";
import { countriesListReducer } from "./countryListSlice";
import { userQueriesReducer } from "./userQueriesSlice";

export const store = configureStore({
    reducer: {
        countries: countriesListReducer,
        userQueries: userQueriesReducer,
    },
})