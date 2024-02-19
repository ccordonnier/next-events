"use client"
import React, { useEffect, useState } from 'react';
import Searchbar from "@/components/searchbar";
import ListEvents from "@/components/lists/listEvents";
import { useLocalStorage } from '@/hooks/useLocalStorage';
import useFetchEvents from '@/hooks/useFetchEvents';

const page = () => {
  const [account, setAccount] = useLocalStorage("account",{});
  const [options, setOptions] = useState({})
  const [urlApi, setUrlAPI] = useState("http://localhost:3001/api/events/?userId="+account._id??0);
  const [events, error, state] = useFetchEvents(urlApi,options);

const filter = (filter) => {
  let url = urlApi;
  Object.entries(filter).forEach(([key,value])=>{
    url+="&"+key+"="+value;
  });
  console.log("url",url);
  setUrlAPI(url);
};
  // const filter = (filters) => {
  //   var eventsToFilter = events;
  //   return eventsToFilter.filter((event) =>
  //   (
  //     (filters.minprice ?? event.price >= filters.minprice) &&
  //     (filters.maxprice ?? event.price <= filters.maxprice) &&
  //     (filters.startDate ?? event.date >= filters.startDate) &&
  //     (filters.endDate ?? event.date <= filters.endDate) &&
  //     (filters.startTime ?? event.time >= filters.startTime) &&
  //     (filters.endTime ?? event.date <= filters.endTime) &&
  //     (filters.categorie ?? event.categorie == filters.categorie) &&
  //     (filters.city ?? event.city == filters.city) &&
  //     (filters.places ?? (event.places - event.participants >= filters.places))
  //   ));
  // }

  return (
    <div className="">
      <div className='bg-white p-4'>
        <h2>Filter la recherche</h2>
        <div className="flex ">
          <Searchbar onSubmit={filter}></Searchbar>
        </div>
        <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
          <a href="#" className="text-sm font-semibold leading-6 text-orange-600">
            Plus de filtres ...
          </a>
        </div>
      </div>
      <div className='flex flex-col flex-wrap w-full'>
        {state=="loading" && <div>Loading...</div>}
        {state=="error" && <div>{error}</div>}
        {state=="succeeded" && 
        events?.map(event => {
          return (
            <ListEvents key={event._id} event={event}></ListEvents>
          )
        })}
      </div>
    </div>
  );
};

export default page;