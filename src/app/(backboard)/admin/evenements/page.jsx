"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Searchbar from "@/components/searchbar";
import ListEvents from "@/components/lists/listEvents";
import { useLocalStorage } from '@/hooks/useLocalStorage';



const page = () => {

  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();
  var [account, setAccount] = useLocalStorage("account",JSON.parse(localStorage.getItem("account")));
  
  useEffect(() => {
    let userInformations = "corentin";
      let user = JSON.parse(localStorage.getItem("account"));
      console.log(user)
    fetch("http://localhost:3001/api/events/", { method: "POST", mode:"cors",
    body:JSON.stringify({userId:user?._id}), headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },})
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
  }, []);

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
    <div className="">
      <div className='bg-white p-4'>
        <h2>Filter la recherche</h2>
        <div className="flex ">
          <Searchbar></Searchbar>
        </div>
        <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
          <a href="#" className="text-sm font-semibold leading-6 text-orange-600">
            Plus de filtres ...
          </a>
        </div>
      </div>
      <div className='flex flex-col flex-wrap w-full'>
        {events.map(event => {
          return (
            <ListEvents event={event}></ListEvents>
          )
        })}
      </div>
    </div>
  );
};

export default page;