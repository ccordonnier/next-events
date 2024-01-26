import { configureStore, createSlice } from "@reduxjs/toolkit";
import { accountSlice } from "./reducers/accountReducer";
import { alertsSlice } from "./reducers/alertsReducer";

export const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        alerts: alertsSlice.reducer,
    }
});
