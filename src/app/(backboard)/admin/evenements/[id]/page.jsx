"use client"
import React, { useState, useEffect } from 'react';
import FormEvent from "@/components/forms/FormEvent";
import { getOneEventApi } from "@/api/eventsApi";


const page = ({ params }) => {
  const [event,setEvent] = useState({});
  useEffect(()=>{
    const res = getOneEventApi(params.id).then(eventDetails=>setEvent(eventDetails));
  },[]);
  
  return (
    <div className='m-4'>
      <div className='bg-white shadow p-6'>
        <h1 className='text-3xl text-bold'>Détail de l'évènement</h1>
      </div>
      <div className='w-full bg-white shadow'>
        {event? <FormEvent event={event} params={params}/> : <p>Chargement ...</p> }
      </div>
    </div>
  );
};

export default page;