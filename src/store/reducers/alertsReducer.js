import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
    name: "alerts",
    initialState: [],
    reducers: {
        addAlert: (state, action) => {
            const newAlert = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
                type: action.payload.type
            }
            state.push(newAlert);
            return state;
        },
        removeAlert: (state, action) => {
            let alerts = state.filter((alert)=>alert.id !== action.payload.id);
            state=alerts;
            return state;
        },
    },
});