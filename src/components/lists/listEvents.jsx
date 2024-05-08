import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import Dropdown from "@/components/dropdown/dropdown";
import { MapPinIcon, CalendarDaysIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const DropdownItems = [
  { name: 'Dupliquer', href: '#Duplicate' },
  { name: 'Annuler', href: '#cancel' },
  { name: 'Supprimer', href: '#remove' },
]

const ListEvents = (props) => {
  let event = props.event
  return (
    <div className="flex flex-row items-start bg-white rounded shadow hover:shadow-md cursor-pointer items-center" key={event._id} onClick={() => { window.Location = process.env.NEXT_PUBLIC_ADMIN_EVENT_PATH + "/" + event._id }}>
      <div className="relative mx-4" style={{ width: "10%", height: "11rem" }}>
        <Image
          className='max-w-36'
          src={"/evenements/" + event.imageEvent}
          layout="fill" objectFit='cover'
          alt={"image of " + event.title}
        />
      </div>
      <div className='px-4 w-100' style={{ width: "90%" }}>
        <h2 className='text-2xl mt-3 h-7 overflow-hidden'>{event.title}</h2>
        <div className=''>
          {event.city &&
            <div className='flex flex-row text-lg my-3'>
              <MapPinIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{event.city}</span>
            </div>
          }
          {
            (event.dateStart || event.time) &&
            <div className='flex flex-row text-lg my-3'>
              {event.dateStart &&
                <div className='flex flex-row'>
                  <CalendarDaysIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{new Date(event.dateStart).toLocaleDateString('fr-FR')}</span>
                </div>
              }
              {event.time &&
                <div className="flex flex-row ml-10">
                  <ClockIcon className="h-6 flex-none text-orange-400" aria-hidden="true" /><span>{event.time}</span>
                </div>
              }
            </div>
          }
          <div className='flex flex-row text-lg my-3 justify-between'>
            <div>
              <div className="flex -space-x-1 overflow-hidden">
                <UserGroupIcon className="h-6 flex-none text-orange-400 mr-1" aria-hidden="true" /><span>{Math.floor(Math.random() * 100)} / {event.places ?? 100} inscrits</span>
              </div>
            </div>
            <div className="ml-10 text-xl mr-10 flex gap-2">
              <Dropdown value="action" items={DropdownItems} />
              <Link className="bg-orange-600 rounded-md px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" href={process.env.NEXT_PUBLIC_ADMIN_EVENT_PATH + "/" + event._id}>Détails</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEvents;