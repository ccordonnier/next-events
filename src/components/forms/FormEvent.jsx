import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

import Filegroup from "@/components/forms/FileGroup";
import InputText from "@/components/forms/InputText";
import Textarea from "@/components/forms/Textarea";
import SubmitButton from "@/components/forms/SubmitButton";
import Image from "next/legacy/image";
import DetailsEvent from "@/components/dashboard/detailsEvent";

const FormEvent = ({ event }) => {
  const router = useRouter();

  const submitForm = async (event) => {
    event.preventDefault();
    let form = document.getElementById("formEvent");
    let formdata = new FormData(form);
    console.log(formdata.entries);
    const response = await fetch("http://localhost:3001/api/event/" + params.id, {
      method: "PUT",
      mode: "cors",
      body: formdata,
    })
      .then((response) => {
        console.warn("response: " + response)
        if (response.status === 201) {
          alert("L'event a bien été Modifié")
          return response.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      }).catch((error) => {
        console.error("erreur lors de la modification: " + error)
        //alert("erreur lors de la modification: " + error);
      });
  }
  
  const removeEvent = () => {
    fetch("http://localhost:3001/api/event/:id" + params.id, {
      method: "DELETE",
      mode: "cors",
    })
      .then((response) => {
        if (response.status === 200) {
          alert("L'event a bien été supprimé")
          return response.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      }).then(json => {
        router.push("/admin/evenements");
      })
      .catch((error) => {
        alert("erreur lors de la modification: " + error);
      });
  }
  let [form, setForm] = useState([
    { name: "title", type: "text", id: "title", placeholder: "Mon Evènement", label: "Nom de l'évènement", value : event.title??""},
    { name: "description", type: "textarea", id: "description", placeholder: "", label: "Description" , value : event.description??""},
    { name: "date", type: "date", id: "date", placeholder: "", label: "Date" , value : event.date},
    { name: "timeStart", type: "time", id: "timeStart", placeholder: "00:00", label: "Heure de début", value : event.time??"" },
    { name: "timeEnd", type: "time", id: "timeEnd", placeholder: "23:59", label: "Heure de fin", value : event.time??"" },
    { name: "city", type: "text", id: "city", placeholder: "Ville...", label: "Ville", value : event.city??"" },
    { name: "categorie", type: "text", id: "categorie", placeholder: "", label: "Catégorie", value : event.category??"" },
    { name: "place", type: "number", id: "place", placeholder: "100", label: "Nombre de places", value : event.places??"" },
    { name: "price", type: "number", id: "price", placeholder: "23.99", label: "Prix", value : event.price??"" },
    { name: "imageEvent", type: "file", id: "imageEvent", placeholder: "", label: "Image de l'évènement", value : event.imageEvent??"" },
  ])

  

  return (
    <>
    <form method="post" id="formEvent" className="flex">
      <div className='bg-white p-6 grid gap-x-6 gap-y-4 w-9/12	'>
        {form.map(item => {
          return (
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 " key={item.id}>
              <div className="sm:col-span-4">
                {item.type == "textarea" &&
                  <Textarea item={item} ></Textarea>
                }
                {item.type == "file" &&
                  (
                    <>

                      <div className='h-[200px] relative'><Image src={"/evenements/" + item.value} layout="fill" objectFit='contain'></Image></div>
                      <Filegroup item={item}></Filegroup>
                    </>
                  )
                }
                {"text time date number".includes(item.type) &&
                  <InputText item={item}></InputText>
                }
                {item.type == "button" &&
                  <SubmitButton item={item} submitForm={submitForm}></SubmitButton>
                }
              </div>
            </div>
          )
        })}
      </div>
      <DetailsEvent></DetailsEvent>
    </form>
    </>
  );
};

export default FormEvent;