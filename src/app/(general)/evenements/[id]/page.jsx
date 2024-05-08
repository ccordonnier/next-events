"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";
import { MapPinIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import { getOneEventApi } from "@/api/eventsApi"
import { nl2br } from "@/utils";
import InputText from '@/components/forms/InputText';
import Textarea from '@/components/forms/Textarea';

const messageForm = [
  { name: "nom", type: "text", id: "nom", label: "Votre nom" },
  { name: "email", type: "email", id: "email", placeholder: "", label: "Votre email" },
  { name: "message", type: "textarea", id: "message", placeholder: "", label: "Message" },
]

const submitForm = (e) =>{
  e.preventDefault
  alert("Message Envoyé");
}

const page = ({ params }) => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    const getEvent = () => {
      getOneEventApi(params.id).then(eventDetails => {
        eventDetails.dateStart = new Date(eventDetails.dateStart).toLocaleDateString('fr-FR', {
          day: "numeric", year: "numeric", weekday: "short", month: "long"
        })
        setEvent(eventDetails)
      });
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 500);
    }
    getEvent();
  }, []);

  return (
    <div>
      <div className='w-full h-[40vh] overflow-hidden relative'>
        <div>{Math.random() * 100} participants</div>
        {event ? <Image className='brightness-50' src={"/evenements/" + event.imageEvent} alt={"image de " + event.imageEvent} layout='fill' objectFit='cover' /> : <p>Chargement ...</p>}
        <div className='absolute text-white flex flex-col pl-[5%] pt-32'>
          <h1 className='text-6xl my-4 font-bold'>{event.title}</h1>
          <div className='text-xl flex my-2'>
            {event.dateStart &&
              <p className="flex flex-row"><CalendarDaysIcon className="h-6 flex-none"></CalendarDaysIcon><span className="ml-2">{" " + event.dateStart}</span></p>
            }
            {event.timeStart &&
              <p className="flex flex-row"><ClockIcon className="h-6 flex-none"></ClockIcon><span className="ml-2">{" " + event.timeStart}</span></p>
            }
          </div>
          <div className='text-xl flex my-2'>
            {event.city &&
              <p className="flex flex-row"><MapPinIcon className="h-6 flex-none"></MapPinIcon><span className="ml-2">{" " + event.city}</span></p>
            }
          </div>
        </div>
      </div>
      <div className='flex flex-row m-[5%]'>
        <div className='w-3/4'>
          <div>
            <h2 className='text-5xl mb-10 font-bold'>Description</h2>
            <p style={{ whiteSpace: "pre-line" }}>{event.description}</p>
          </div>
          <div>
            <h2 className='text-5xl my-10 font-bold'>Emplacement</h2>
            <div >
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "50vh" }} >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div>
            <h2 className='text-5xl my-10 font-bold'>Contactez l'organisateur</h2>
            <form className='w-3/4'>
              {messageForm.map(field => {
                if (field.type === "text" || field.type === "email") {
                  return <InputText item={field}></InputText>
                } else {
                  return <Textarea item={field} ></Textarea>
                }
              })}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" onClick={submitForm} className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  Envoyer
                </button>
              </div>
            </form>



          </div>
        </div>
        <div className='w-1/4'>
          <h2 >Détails {event.price ? <span className='price'>{event.price}€</span> : ""}</h2>
          <div>{Math.random() * 100} participants</div>
          {event.dateStart && (
            <div>
              <p className="flex flex-row"><CalendarDaysIcon className="h-6 flex-none"></CalendarDaysIcon><span className="ml-2">{" " + event.dateStart}</span></p>
            </div>
          )}
          {event.timeStart && (
            <div>
              <p className="flex flex-row"><ClockIcon className="h-6 flex-none"></ClockIcon><span className="ml-2">{" " + event.timeStart}</span></p>
            </div>
          )}
          {event.city && (
            <div>
              <p className="flex flex-row"><MapPinIcon className="h-6 flex-none"></MapPinIcon><span className="ml-2">{" " + event.city}</span></p>
            </div>
          )}
          <div><button>S'inscrire</button></div>
        </div>

      </div>
    </div>
  );
};

export default page;