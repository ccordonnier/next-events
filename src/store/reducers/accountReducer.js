import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name: "account",
    initialState: {},
    reducers : {
        setAccount: (state, action) => {
            state = action.payload;
            return state; 
        },
        logout: (state, action) => {
            state = {}
            return state;
        }
    }
});
