import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const requestCountryInfoThunk = createAsyncThunk(
  'countryInfo/getCountryInfoByName',
  async (name, thunkApi) => {
    try {
      const { data } = await axios.get(`/name/${name}?fullText=true`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  countryInfo: null,
  isLoading: null,
  error: null,
};

const countryInfoSlice = createSlice({
  name: 'countryInfo',
  initialState,
  extraReducers: builder =>
    builder
      // --- GET COUNTRY INFO --- //
      .addCase(requestCountryInfoThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestCountryInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countryInfo = action.payload;
      })
      .addCase(requestCountryInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const selectCountryInfo = state => state.countryInfo.countryInfo;
export const selectCountryInfoIsLoading = state => state.countryInfo.isLoading;
export const selectCountryInfoError = state => state.countryInfo.error;

export const countryInfoReducer = countryInfoSlice.reducer;
