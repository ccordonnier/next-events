'use client';
import classes from './Carousel.module.css';

import React, {useEffect, useState} from 'react';
import Item from './Item';
const Carousel = () => {
    const [events,setEvents] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/api/events", { method:"GET" } )
        .then((response) => {
            if (response.status === 200) {
                let r = response.json()
                return r;
            } else {
                throw new Error("Something went wrong on API server!");
            }
        })
        .then((data) => {
            setEvents(data);
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);
    return (
        <div className={classes.Carousel}>
            {events && events.map(event => {
                return <Item key={event._id} title={event.title} image={event.image} description={event.description} date={new Date(event.date)} time={event.time}></Item>
            }) }
        </div>
    )
}

export default Carousel;