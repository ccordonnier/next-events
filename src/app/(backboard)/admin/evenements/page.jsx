"use client"
import React, { useEffect, useState } from 'react';
import Searchbar from "@/components/searchbar";
import ListEvents from "@/components/lists/listEvents";
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { getEventsApi } from "@/api/eventsApi";

const page = () => {
  const [account, , clearLs] = useLocalStorage("account",null);
  const [options, setOptions] = useState({id_creator:account?._id??0})
  const [events,setEvents] = useState([])

  useEffect(()=>{
    getEventsApi(options).then(events=>setEvents(events))
  },[options])


const filter = (filter) => {
  let filterOptions = {id_creator:account?._id??0};
  Object.entries(filter).forEach(([key,value])=>{
    filterOptions[key] = value;
  });
  setOptions(filterOptions)
};

  return (
    <div>
      <div className='bg-white p-4 m-3' style={{ borderColor:"#636b7433", borderWidth:"1px"}}>
        <h2>Filter la recherche</h2>
        <div className="flex">
          <Searchbar onSubmit={filter}></Searchbar>
        </div>
        <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
          <a href="#" className="text-sm font-semibold leading-6 text-orange-600">
            Plus de filtres ...
          </a>
        </div>
      </div>
      <div className='flex flex-col flex-wrap gap-3 m-3'>
        {events?.map(event => {
          return (
            <ListEvents key={event._id} event={event}></ListEvents>
          )
        })}
      </div>
    </div>
  );
};

export default page;