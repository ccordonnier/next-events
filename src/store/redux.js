import { configureStore, createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
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
        },
        removeAlert: (state, action) => {
            return state.filter((alert)=>alert.id !== action.payload.id);
        },
    },
});

const accountSlice = createSlice({
    name: "account",
    initialState:{},
    reducers : {
        getAccount: (state,action) => {
            return state;
        },
        login: (state, action) => {
            const user = {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                avatar: action.payload.avatar,
                birthdate: action.payload.birthdate,
                registration: action.payload.registration,
                token: action.payload.token,
            }
            state = {user};
        },
        logout: (state, action) => {
            state = {}
        }
    }
});

export const store = configureStore({
    reducer: {
        alerts: alertsSlice.reducer,
        account: accountSlice.reducer,
    }
});