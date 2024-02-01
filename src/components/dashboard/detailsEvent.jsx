import React from 'react';

const DetailsEvent = () => {
  return (
    <div className='rounded-md border-2 border-gray-300	bg-white w-3/12 m-6 p-6 h-fit'>
      <h2>Détails de l'évènement</h2>
      <div className='flex items-center py-3 justify-between'>
        <p>Statut: </p>
        <select className="border-0 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm sm:leading-6">
          <option value="1">En ligne</option>
          <option value="0">Brouillon</option>
        </select>
      </div>
      <div className='flex py-3 justify-between'><p>Créer le: </p><p>1 janvier 2024</p></div>
      <div className='flex py-3 justify-between'><p>Créateur: </p><p>Corentin Cordonnier</p></div>
      <div className='flex py-3 justify-between'><p>Dernière modification: </p><p>8 janvier 2024</p></div>
      <div className='flex py-3 justify-between'><p>Modifié par: </p><p>Corentin Cordonnier</p></div>
      <div className='flex py-3 justify-between'>
        <button className='rounded bg-red-600 px-6 py-3 hover:bg-red-500 text-white w-[45%]' type="button" onClick={() => removeEvent}>Supprimer</button>
        <button className='rounded bg-indigo-600 px-6 py-3 hover:bg-blue-500 text-white w-[45%]' type='submit' onClick={(e) => submitForm(e)}>Modifier</button>
      </div>
    </div>

  );
};

export default DetailsEvent;