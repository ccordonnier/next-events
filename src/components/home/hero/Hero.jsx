"use client"
import {React,Fragment } from 'react';
import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const cities = [
  { id: 0, name: 'Utiliser ma géolocalisation'},
  { id: 1, name: 'Lille'},
  { id: 2, name: 'Wasquehal'},
  { id: 3, name: 'Lens'},
  { id: 4, name: 'Strasbourg'},
  { id: 5, name: 'Paris'},
]

const Hero = () => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState('false');
  const filteredCity =
    query === ''
      ? [cities[0]]
      : cities.filter((city) => {
          return city.name.toLowerCase().includes(query.toLowerCase())
        })
    
    return (

            <div className="relative isolate px-6 py-36 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#ff9600] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Découvrez les Meilleurs Événements à Venir
            </h1>
            <div className='flex mt-10'>
              <input type="text" name="search" id="search" className="block w-full rounded-l border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Chercher un évènement ..."/>
              <div className='combobox'>
              <Combobox nullable>
              <Combobox.Button>
              {({ open }) => (<Combobox.Input onClick={e => {
        if (open) e.stopPropagation();
      }} className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        onChange={(event) => {setQuery(event.target.value)}}
        displayValue={(city) => city?.name}
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
              <input type="date" name="date" id="date" className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Une date"/>
              <button className='rounded-r bg-orange-600 hover:bg-orange-500 py-2 px-5 text-white'>Rechercher</button>
            </div>
            <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
              <a href="#" className="text-sm font-semibold leading-6 text-orange-600">
                Ajoutez votre propre évènement<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    );
};

export default Hero;