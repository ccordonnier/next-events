"use client"
import React, {useEffect, useState} from 'react';
import { MapPinIcon,CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from "../../../components/searchbar";

const page = () => {
  
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
        data.date = new Date(data.date);
        setEvents(data);
    })
    .catch((error) => {
        console.error(error);
    });
  },[]);

  const filter = (filters) => {
    var eventsToFilter = events;
    return eventsToFilter.filter((event)=>
    (
      (filters.minprice ?? event.price >= filters.minprice) && 
      (filters.maxprice ?? event.price <= filters.maxprice) &&
      (filters.startDate ?? event.date >= filters.startDate) &&
      (filters.endDate ?? event.date <= filters.endDate) &&
      (filters.startTime ?? event.time >= filters.startTime) &&
      (filters.endTime ?? event.date <= filters.endTime ) &&
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
      {events.map(event=>{
        return (
            <div className="flex flex-col lg:w-96 sm:w-1/2 items-start bg-gray-100 rounded-3xl m-3">
              <div className="relative w-100" style={{height:"25vh"}}>
                <Image
                  className="rounded-t-3xl"
                  src={"/Evenements/"+event.image}
                  layout='fill' objectFit='cover'
                />
              </div>
              <div className='px-4 w-100'>
                <h2 className='text-2xl mt-3 h-7 overflow-hidden'>{event.title}</h2>
                <div className=''>
                  <div className='flex flex-row text-lg my-3'>
                    <MapPinIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{event.city}</span>
                  </div>
                  <div className='flex flex-row text-lg my-3'>
                    <div className='flex flex-row'>
                      <CalendarDaysIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{ new Date(event.date).getFullYear() }</span>
                    </div>
                    <div className="flex flex-row ml-10">
                      <ClockIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{event.time}</span>
                    </div>
                  </div>
                  <div className='flex flex-row text-lg my-3'>
                    <div>
                      {/*event.participants.length > 0 && 
                        <div className="background-gray-200 w-100 h-100 rounded block">(a)</div>
        */}
                      <div className="flex -space-x-1 overflow-hidden">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        { "+" + Math.floor(Math.random() * 100)}
      </div>
                    </div>
                    <div className="ml-10 text-xl">
                      <Link className="background-orange-400 px-5 py-2" href={"/"+event._id}>Détails</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default page;