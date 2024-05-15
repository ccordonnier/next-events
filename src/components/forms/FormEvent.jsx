import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Filegroup from "@/components/forms/FileGroup";
import InputText from "@/components/forms/InputText";
import Textarea from "@/components/forms/Textarea";
import SubmitButton from "@/components/forms/SubmitButton";
import Image from "next/legacy/image";
import DetailsEvent from "@/components/dashboard/detailsEvent";
import { modifyEventApi } from "@/api/eventsApi";
import { URL_API_EVENTS } from "@/constants"

const FormEvent = ({ event, params }) => {
  const formEvent = useRef(null);
  const router = useRouter();
  const [form, setForm] = useState([])
  const [imageSrc, setImageSrc] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    const formdata = new FormData(formEvent.current);
    modifyEventApi(params.id, formdata);
    router.push("/admin/evenements");
  }

  const removeEvent = () => {
    fetch(URL_API_EVENTS + params.id, {
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

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
    console.log("selectedImage",selectedImage);

    reader.onload = () => {
      setImageSrc(reader.result);
      console.log("reader.result",reader.result);
      console.log("reader.readasDataUrl",reader.readAsDataURL(selectedImage));
    }

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  const formTemplate = [{ name: "title", type: "text", id: "title", placeholder: "Mon Evènement", label: "Nom de l'évènement", value: event.title ?? "" },
  { name: "description", type: "textarea", id: "description", placeholder: "", label: "Description", value: event.description ?? "" },
  { name: "dateStart", type: "date", id: "dateStart", placeholder: "", label: "Date", value: event.dateStart },
  { name: "timeStart", type: "time", id: "timeStart", placeholder: "00:00", label: "Heure de début", value: event.timeStart ?? "" },
  { name: "timeEnd", type: "time", id: "timeEnd", placeholder: "23:59", label: "Heure de fin", value: event.timeEnd ?? "" },
  { name: "city", type: "text", id: "city", placeholder: "Ville...", label: "Ville", value: event.city ?? "" },
  { name: "categorie", type: "text", id: "categorie", placeholder: "", label: "Catégorie", value: event.category ?? "" },
  { name: "places", type: "number", id: "places", placeholder: "100", label: "Nombre de places", value: event.places ?? "" },
  { name: "price", type: "number", id: "price", placeholder: "23.99", label: "Prix", value: event.price ?? "" },
  { name: "imageEvent", type: "file", id: "imageEvent", placeholder: "", label: "Image de l'évènement", value: event.imageEvent ?? "" },
  ];

  useEffect(() => {
    setForm(formTemplate)
    let imageField = formTemplate.filter(event => event.name == "imageEvent")[0];
    setImageSrc(imageField?.value);
  }, [event])


  return (
    <>
      <form method="post" id="formEvent" className="flex" ref={formEvent}>
        <div className='bg-white p-6 grid gap-x-6 gap-y-4 w-9/12	'>
          {formTemplate.map(item => {
            return (
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 " key={item.id}>
                <div className="sm:col-span-4">
                  {item.type == "textarea" &&
                    <Textarea item={item} ></Textarea>
                  }
                  {item.type == "file" &&
                    (
                      <>
                        <div className='relative mb-5'>
                          <label>Image de l'évènement</label>
                          <div className='flex gap-5'>
                            <div className='w-1/4 relative'>
                              <div className='relative w-full h-full flex flex-col'>
                                <Image src={"/evenements/" + imageSrc} layout='fill' objectFit='contain'></Image>
                              </div>
                            </div>
                            <div className='w-3/4'>
                              <Filegroup item={item} handleChange={handleImageChange}></Filegroup>
                            </div>
                          </div>
                        </div>

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
        <DetailsEvent event={event} submitForm={submitForm}></DetailsEvent>
      </form>
    </>
  );
};

export default FormEvent;