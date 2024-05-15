import React from 'react';
import {removeEventApi} from "@/api/eventsApi"
import {URL_DASHBOARD_EVENTS} from "@/constants"

const DetailsEvent = ({event, submitForm}) => {
  const onlineSelected = event.status == 1?true:false;
  const draftSelected = typeof(event.status)=="undefined" || event.status == 0?true:false;
  const removeEvent = (id) => {
    if(confirm("Cette action est irréversible. Etes vous sur de vouloir supprimer cet évènement ?")){
      removeEventApi(id);
      window.location=URL_DASHBOARD_EVENTS;
    }
  }

  return (
    <div className='rounded-md border-2 border-gray-300	bg-white w-3/12 m-6 p-6 h-fit min-w-[300px]'>
      <h2>Détails de l'évènement</h2>
      <div className='flex items-center py-3 justify-between'>
        <p>Statut: </p>
        <select className="border-0 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm sm:leading-6">
          <option value={"1"} selected={onlineSelected}>En ligne</option>
          <option value={"0"} selected={draftSelected}>Brouillon</option>
        </select>
      </div>
      {event.date_creation && <div className='flex py-3 justify-between'><p>Créer le: </p><p>{event.date_creation}</p></div>}
      <div className='flex py-3 justify-between'><p>Créateur: </p><p>{event.creator}</p></div>
      {event.update_user && <div className='flex py-3 justify-between'><p>Modifié le: </p><p>8 janvier 2024</p></div>}
      {event.update_user && <div className='flex py-3 justify-between'><p>Modifié par: </p><p>Corentin Cordonnier</p></div>}
      <div className='flex py-3 justify-between'>
        <button className='rounded bg-red-600 px-6 py-3 hover:bg-red-500 text-white w-[45%]' type="button" onClick={() => removeEvent(event._id)}>Supprimer</button>
        <button className='rounded bg-indigo-600 px-6 py-3 hover:bg-blue-500 text-white w-[45%]' type='submit' onClick={(e) => submitForm(e)}>Modiifier</button>
      </div>
    </div>

  );
};

export default DetailsEvent;