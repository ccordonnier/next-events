'use client';

import React, {useEffect, useState} from 'react';
import Bcard from '../cards/Card';
const EventList = () => {
    const [events,setEvents] = useState([]);

    useEffect(()=>{
        console.warn("useEffect")
        fetch("http://localhost:3001/api/events", { method:"GET"  } )
        .then((response) => {
            console.warn("response.status",response.status)
            if (response.status === 200) {
                let r = response.json()
                console.warn("r",r)
                return r;
            } else {
                throw new Error("Something went wrong on API server!");
            }
        })
        .then((data) => {
            console.log("data",data)
            setEvents(data);
        })
        .catch((error) => {
            console.error(error);
        });


    },[]);
    return (
        <>
        <h1>Events</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridGap:"10px"}}>
            {events.map(event => {
                return <Bcard title={event.title} image={event.image} description={event.description} date={new Date(event.date)} time={event.time}></Bcard>
            }) }
        </div>
        </>
    );
};

export default EventList;