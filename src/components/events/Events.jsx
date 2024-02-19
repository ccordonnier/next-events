'use client';

import React, {useEffect, useState} from 'react';
import useFetchEvents from "@/hooks/useFetchEvents"
import Event from "@/components/events/Event";

const EventList = (props) => {
    const [options, setOptions] = useState({from:"events"});// options for fetch
    const [urlApi, setUrlApi] = useState("http://localhost:3001/api/events"); //url for fetch
    const [events, state, error] = useFetchEvents(urlApi,options)
    return (
        <>
        <h1>Events</h1>
        <div style={{display:"grid", gridTemplateColumns:`repeat(${props.columns},1fr)`, gridGap:"10px"}}>

{state == "loading" && <div>Loading ...</div>}
        {events.map(event => {
          return (
            <Event key={event._id} event={event}/>
          )
        })}
        </div>
        </>
    );
};

export default EventList;