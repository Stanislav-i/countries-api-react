import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: null,
    regionSelect: "Europe",
}

export const userQueriesSlice = createSlice({
    name: "userQueries",
    initialState,
    reducers: {
        setSearchValue: (state, action)=> {
            void (state.searchQuery = action.payload);
        },
        setRegion: (state, action)=> {
            void (state.regionSelect = action.payload);
        }
    }
});

export const selectUserSearchQuery = state => state.userQueries.searchQuery;
export const selectUserRegion = state => state.userQueries.regionSelect;

export const {setRegion, setSearchValue} = userQueriesSlice.actions;

export const userQueriesReducer = userQueriesSlice.reducer;
