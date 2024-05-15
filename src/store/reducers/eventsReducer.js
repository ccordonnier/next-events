import { createSlice } from "@reduxjs/toolkit";
import { getEventsApi } from "@/api/eventsApi";

export const eventsSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {
    getEvents: (state, action) => {
      console.log("state",state);
      console.log("action",action.payload.id);

      getEventsApi({id_creator: action.payload.id})
      .then(events=>{
        state = events;
        console.log("events1",events)
        let newState = [...events]
        console.log(newState);
        return newState;
      })
      
    },
    addEvent: (state, action) => {
      const newAlert = {
        id: action.payload.id,
        status: action.payload.status??null,
        title: action.payload.title??null,
        url: action.payload.url??null,
        description: action.payload.description??null,
        dateStart: action.payload.dateStart??null,
        dateEnd: action.payload.dateEnd??null,
        timeStart: action.payload.timeStart??null,
        timeEnd: action.payload.timeEnd??null,
        address: action.payload.address??null,
        city: action.payload.city??null,
        imageEvent: action.payload.imageEvent??null,
        category: action.payload.category??null,
        id_creator: action.payload.id_creator??null,
        places: action.payload.places??null,
        price: action.payload.price??null,
        participants: action.payload.participants??null,
        update_datetime: action.payload.update_datetime??null,
        update_user: action.payload.update_user??null,
        data_creation: action.payload.data_creation??null,
      }
      state.push(newAlert);
      return state;
    },
    removeEvent: (state, action) => {
      let events = state.filter((event) => event._id !== action.payload.id);
      return events;
    },
    modifyEvent: (state, action) => {
      
    }
  },
});