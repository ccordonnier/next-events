"use client"
import React from 'react';
import Filegroup from "@/components/forms/FileGroup";
import InputText from "@/components/forms/InputText";
import Textarea from "@/components/forms/Textarea";
import SubmitButton from "@/components/forms/SubmitButton";
import {addEventApi} from "@/api/eventsApi.js";


const form = [
  { name: "title", type: "text", id: "title", placeholder: "Mon Evènement", label: "Nom de l'évènement" },
  { name: "description", type: "textarea", id: "description", placeholder: "", label: "Description" },
  { name: "date", type: "date", id: "date", placeholder: "", label: "Date" },
  { name: "timeStart", type: "time", id: "timeStart", placeholder: "00:00", label: "Heure de début" },
  { name: "timeEnd", type: "time", id: "timeEnd", placeholder: "23:59", label: "Heure de fin" },
  { name: "city", type: "text", id: "city", placeholder: "Ville...", label: "Ville" },
  { name: "categorie", type: "text", id: "categorie", placeholder: "", label: "Catégorie" },
  { name: "place", type: "number", id: "place", placeholder: "100", label: "Nombre de places" },
  { name: "price", type: "number", id: "price", placeholder: "23.99", label: "Prix" },
  { name: "imageEvent", type: "file", id: "imageEvent", placeholder: "", label: "Image de l'évènement" },
  { name: "ajouter", type:"button", id:"ajouter", placeholder:"", value:"Ajouter mon évènement"}
]

const AddEvent = () => {
  const submitForm = (event) => {
    event.preventDefault();
    let form = document.getElementById("formEvent");
    let formdata = new FormData(form);
    let result = addEventApi({formdata: formdata, options : {contentType : 'application/json'}})
    console.log(result);
  }
  return (
      <div className='m-4'>
        <div className='bg-white shadow p-6'>
          <h1 className='text-3xl text-bold'>Créer un évènement</h1>
        </div>
        <form method="post" id="formEvent" className='bg-white shadow p-6 grid gap-x-6 gap-y-4'>
          {form.map(item=>{ return ( 
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6" key={item.id}>  
              <div className="sm:col-span-4"> 
                { item.type=="textarea" && 
                  <Textarea item={item}></Textarea>
                }
                { item.type == "file" && 
                  <Filegroup item={item}></Filegroup>
                }
                { "text time date number".includes(item.type) && 
                  <InputText item={item}></InputText>
                }
                { item.type == "button" && 
                  <SubmitButton item={item} submitForm={submitForm}></SubmitButton>
                }
              </div>
            </div>
          )})}
        </form>
      </div>
    );
};

export default AddEvent;