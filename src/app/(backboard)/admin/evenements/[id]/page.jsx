"use client"
import React, { useState, useEffect } from 'react';


import { useFetchEvents } from '@/hooks/useFetchEvents';
import FormEvent from "@/components/forms/FormEvent";

const page = ({ params }) => {

  const [event, error, state] = useFetchEvents({url:process.env.NEXT_PUBLIC_API_URL_GET_EVENTS+ params.id});
  console.log(event)

  return (
    <div className='m-4'>
      <div className='bg-white shadow p-6'>
        <h1 className='text-3xl text-bold'>Détail de l'évènement</h1>
      </div>
      <div className='w-full bg-white shadow'>
        {state==="loading" &&  <p>Chargement...</p>}
        {state==="error" &&  <p>{error.message}</p>}
        {state==="succeeded" &&  <FormEvent event={event??{}} /> }
      </div>
    </div>
  );
};

export default page;