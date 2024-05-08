"use client"
import React, { useState } from 'react';

import CustomCombobox from "@/components/customCombobox/customCombobox.jsx";

const cities = [
  { id: 0, name: 'Utiliser ma géolocalisation' },
  { id: 1, name: 'Lille' },
  { id: 2, name: 'Wasquehal' },
  { id: 3, name: 'Lens' },
  { id: 4, name: 'Strasbourg' },
  { id: 5, name: 'Paris' },
]

const Searchbar = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let filter = {};
    console.log("formData", formData);
    for (var pair of formData.entries()) {
      if (pair[1]) {
        filter[pair[0]] = pair[1];
      }
    }
    props.onSubmit(filter);
  }
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState('false');
  const filteredCity =
    cities.filter((city) => {
      return city.name.toLowerCase().includes(query.toLowerCase())
    });
  return (
    <form className='flex flex-row w-full' onSubmit={(e) => handleSubmit(e)} id="formSearch">
      <input type="text" name="title" id="search" className="block w-full rounded-l border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Chercher un évènement ..." />
      <div className='combobox'>
        <CustomCombobox data={cities} inputName={"city"} />
      </div>
      <input type="text" onFocus={(e) => { e.target.type = "date"; e.target.showPicker() }} onBlur={e => e.target.type = "text"} name="date" id="date" className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Une date" />
      <button type="submit" className='rounded-r bg-orange-600 hover:bg-orange-500 py-2 px-5 text-white'>Rechercher</button>
    </form>
  )
}

export default Searchbar;