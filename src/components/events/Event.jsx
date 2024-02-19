import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { MapPinIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid';

const Event = (props) => {
  let event = props.event??{};
  return (
      <div className="flex flex-col lg:w-96 sm:w-1/2 items-start bg-gray-100 rounded-3xl m-3">
              <div className="relative w-full h-[25vh] ">
                <Image
                  className="rounded-t-3xl"
                  src={"/evenements/" + event.imageEvent}
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
                      <CalendarDaysIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{new Date(event.date).getFullYear()}</span>
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
                        {"+" + Math.floor(Math.random() * 100)}
                      </div>
                    </div>
                    <div className="ml-10 text-xl">
                      <Link className="background-orange-400 px-5 py-2" href={"/" + event._id}>Détails</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default Event;