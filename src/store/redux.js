import { configureStore, createSlice } from "@reduxjs/toolkit";
import { accountSlice } from "./reducers/accountReducer";
import { alertsSlice } from "./reducers/alertsReducer";
import { eventsSlice } from "./reducers/eventsReducer";

export const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        alerts: alertsSlice.reducer,
        events: eventsSlice.reducer,
    }
});
