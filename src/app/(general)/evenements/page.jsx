"use client"
import React, { useEffect, useState } from 'react';
import useFetchEvents from "@/hooks/useFetchEvents";
import Searchbar from "@/components/searchbar";
import Event from "@/components/events/Event";

const page = () => {

  const [options, setOptions] = useState({from:"page"});
  const [events, error, state] = useFetchEvents("http://localhost:3001/api/events", options);
  // const getEvents = async () => {
  //   const result = await fetchEventsOfUser();
  // }


  const filter = (filters) => {
    var eventsToFilter = events;
    return eventsToFilter.filter((event) =>
    (
      (filters.minprice ?? event.price >= filters.minprice) &&
      (filters.maxprice ?? event.price <= filters.maxprice) &&
      (filters.startDate ?? event.date >= filters.startDate) &&
      (filters.endDate ?? event.date <= filters.endDate) &&
      (filters.startTime ?? event.time >= filters.startTime) &&
      (filters.endTime ?? event.date <= filters.endTime) &&
      (filters.categorie ?? event.categorie == filters.categorie) &&
      (filters.city ?? event.city == filters.city) &&
      (filters.places ?? (event.places - event.participants >= filters.places))
    ));
  }

  return (
    <div>
      <div className=" container">
        <div className="flex ">
          <Searchbar></Searchbar>
        </div>
        <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
          <a href="#" className="text-sm font-semibold leading-6 text-orange-600">
            Plus de filtres ...
          </a>
        </div>
      </div>
      <div className='flex flex-row flex-wrap w-2/3'>
        {state == "loading" && <div>Loading ...</div>}
        {events.map(event => {
          return (
            <Event key={event._id} event={event}/>
          )
        })}
      </div>
    </div>
  );
};

export default page;