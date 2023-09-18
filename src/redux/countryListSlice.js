import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const requestCountriesThunk = createAsyncThunk(
    'countries/getAll',
    async (region, thunkApi) => {
        try {
            const {data} = await axios.get(`/region/${region}`);
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    countries: null,
    isLoading: null, 
    error: null,
};

const countryListSlice = createSlice({
    name: 'countries',
    initialState,
    extraReducers: builder => 
    builder
    // --- GET COUNTRIES --- //
        .addCase(requestCountriesThunk.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(requestCountriesThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.countries = action.payload;
        })
        .addCase(requestCountriesThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    
});

export const selectAllCountries = state => state.countries.countries;
export const selectcountriesIsLoading = state => state.countries.isLoading;
export const selectcountriesError = state => state.countries.error;

export const countriesListReducer = countryListSlice.reducer;