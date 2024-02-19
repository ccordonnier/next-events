"use client"
import React, {useState} from 'react';

import { Combobox } from '@headlessui/react'



const cities = [
    { id: 0, name: 'Utiliser ma géolocalisation'},
    { id: 1, name: 'Lille'},
    { id: 2, name: 'Wasquehal'},
    { id: 3, name: 'Lens'},
    { id: 4, name: 'Strasbourg'},
    { id: 5, name: 'Paris'},
  ]



const Searchbar = (props) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      let formData = new FormData(e.target);
      let filter = {};
      console.log("formdata1");
      for (var pair of formData.entries()) {
        if(pair[1]){
          filter[pair[0]] = pair[1];
        }
      }
      props.onSubmit(filter);
    }
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState('false');
    const filteredCity =
      query === ''
        ? [cities[0]]
        : cities.filter((city) => {
            return city.name.toLowerCase().includes(query.toLowerCase())
          });
    return (
        <form className='flex flex-row w-full' onSubmit={(e)=>handleSubmit(e)} id="formSearch">
            <input type="text" name="search" id="search" className="block w-full rounded-l border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Chercher un évènement ..."/>
              <div className='combobox'>
              <Combobox nullable value={query!=""??query}>
              <Combobox.Button>
              {({ open }) => (<Combobox.Input placeholder={"Une ville ..."} onClick={e => { if(e.target.value="Une ville ..."){e.target.value=""};if (open) e.stopPropagation();}} 
                className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={(event) => {console.log("event",event);setQuery(event.target.value)}}
            />)}
      </Combobox.Button>
      <Combobox.Options >
        {filteredCity.map((city) => (
          <Combobox.Option key={city.id} value={city}>
            {city.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
    </div>
              <input type="text" onFocus={(e)=>{e.target.type="date";e.target.showPicker()}} onBlur={e=>e.target.type="text"} name="date" id="date" className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Une date"/>
              <button type="submit" className='rounded-r bg-orange-600 hover:bg-orange-500 py-2 px-5 text-white'>Rechercher</button>
            </form>
    )
}

export default Searchbar;