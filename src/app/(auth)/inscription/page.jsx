"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const page = () => {
  const dispatch = useDispatch();
  let submitForm = (event) => {
    event.preventDefault();
    let form = document.getElementById("formInscription");
    let formdata = new FormData(form);
    fetch("http://localhost:3001/api/user/add", { 
        method:"POST", 
        mode:"cors",
        body:formdata 
    })
    .then((response) => {
        if (response.status === 201) {
          alert("L'utilisateur a bien été enregistré");
            //dispatch({ type:"alerts/addAlert", payload: {title: "Utilisateur enregistré", text: "L'utilisateur a bien été enregistré", type: "success"}})
            return response.json();
        } else {
          alert("Something went wrong on API server!");
            //throw new Error("Something went wrong on API server!");
        }
        
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
        alert("Erreur lors de l'enregistrement");
        //dispatch({ type:"alerts/addAlert", payload: {title: "Erreur lors de l'enregistrement", text: "erreur lors de l'enregistrement", type: "error"}})
    });
  }
  return (
        <div className='flex'>
            <div className='w-1/2 h-screen relative'>
                <Image src={"/images/hoian-4988318_1920.jpg"} layout='fill' objectFit='cover'  objectPosition='bottom' alt="Login page"/>
            </div>
            <div className='w-1/2 flex flex-col'>
            <div className="relative mt-6 ml-6 flex">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">QR Event</span>
                    <img className="h-8 w-auto" src="/images/logoRow.webp" alt="" />
                  </Link>
              </div>
              <div className='w-3/5 lg:w-2/5 mt-10 align-self-center'>
                <h1 className="w-full">Inscription</h1>
                <form className="w-full" id="formInscription" onSubmit={submitForm} >
                  <div className="space-y-12">
                    <div className="">
                      <div className="">
                        <div className="mt-2 w-full flex gap-1">
                          <div className='w-1/2'>
                          <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                            Nom
                          </label>
                          <div className="">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 ">
                            <input type="text" name="firstname" id="firstname" className="block w-full rounded border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                          </div>
                          <div className='w-1/2'>
                          <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                            Prénom
                          </label>
                          <div className="">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 ">
                            <input type="text" name="lastname" id="lastname" className="block w-full rounded border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"/>
                            </div>
                          </div>
                          </div>
                        </div>
                        
                        <div className="mt-2 w-full">
                          <label htmlFor="birthdate" className="block text-sm font-medium leading-6 text-gray-900">
                            Date de naissance
                          </label>
                          <div className="">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 ">
                            <input type="date" name="birthdate" id="birthdate" className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" placeholder="Date de naissance"/>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 w-full">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                          </label>
                          <div className="">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 ">
                            <input type="email" name="email" id="email" className="block w-full rounded border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 w-full min-w-48"/>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 w-full">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Mot de passe
                          </label>
                          <div className="mt-2 w-full">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600">
                            <input type="password" name="password" id="password" className="block rounded border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 w-full min-w-48"/>
                            </div>
                          </div>
                        </div>
                        <div class="relative flex gap-x-3 mt-2">
                            <div class="flex h-6 items-center">
                                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            </div>
                            <div class="text-sm leading-6">
                               <p class="t ext-gray-500">En cochant cette case vous acceptez nos <Link href="#" >conditions générales</Link>.</p>
                            </div>
                        </div>
                        <div className="mt-1 flex items-center">
                          <button type="submit"
                            className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full min-w-48">
                            S'enregistrer
                          </button>
                        </div>
                        <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
                          <Link href="connexion" className="text-sm font-semibold leading-6 text-orange-600">
                            Déjà membre ? Connectez-vous 
                          </Link>
                        </div>
                        <div>
                          <div className='mt-6 text-gray-400 block social-connexion-title grid align-items-center '> Réseaux sociaux </div>
                          <div className="mt-6 flex items-center">
                            <button type="button"
                              className="rounded bg-indigo-600  py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full min-w-48 flex justify-content-center">
                              <Image className='mr-2' width="20" height="20" src={"/images/facebook-logo-2021.webp"}/><span>Connexion avec Facebook</span>
                            </button>
                          </div>
                          <div className="mt-2 flex items-center">
                            <button type="button"
                              className="rounded bg-gray-200  py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full min-w-48 flex justify-content-center">
                              <Image className='mr-2' width="20" height="20" src={"/images/logoGoogle.png"}/><span>Connexion avec Google</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
         </div>
  );
};

export default page;