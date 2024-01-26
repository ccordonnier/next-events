"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from "@/hooks/useLocalStorage"

const page = () => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const [account,setAccount] = useLocalStorage("account", localStorage.getItem("account")??{});
  let submitForm = async (event) => {
    event.preventDefault();
    let form = document.getElementById("formConnexion");
    let formdata = new FormData(form);
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(Object.fromEntries(formdata)),
        headers: {
          "Content-Type": "application/json",
        },
      });
      var alertId = Date.now();
      if (response.status === 200) {
        const data = await response.json();
        setAccount(data);
        router.push("/");            
      } else if (response.status === 401) {
        const errorData = await response.json();
        dispatch({ type: "alerts/addAlert", payload: { title: "Erreur lors de l'enregistrement", text: errorData.message, type: "danger", id: alertId } })
        //alert("Connexion impossible :" + errorData.message);
      }
    } catch (error) {
      dispatch({ type: "alerts/addAlert", payload: { title: "Erreur lors de l'enregistrement", text: "erreur lors de l'enregistrement", type: "danger", id: alertId } })
      //alert("Erreur lors de la connexion"+error.message);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-screen relative">
        <Image src={"/images/hoian-4988318_1920.jpg"} fill objectFit='cover' objectPosition='bottom' alt="Login page" />
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="relative mt-6 ml-6 flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">QR Event</span>
            <img className="h-8 w-auto" src="/images/logoRow.webp" alt="logo qr event" />
          </Link>
        </div>
        <div className='mt-32 w-2/5 min-w-48 self-center'>
          <h1 className="w-full text-2xl font-bold">Connexion</h1>
          <form className="w-full" id="formConnexion" onSubmit={submitForm} >
            <div className="space-y-12">
              <div className="pb-12">
                <div className="mt-10">
                  <div className="mt-2 w-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 ">
                        <input type="email" name="email" id="email" className="block w-full rounded border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 w-full min-w-48" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 w-full">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                      Mot de passe
                    </label>
                    <div className="mt-2 w-full">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600">
                        <input type="password" name="password" id="password" className="block rounded border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 w-full min-w-48" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
                    <Link href="#" className="text-sm font-semibold leading-6 text-orange-600">
                      Mot de passe oublié
                    </Link>
                  </div>
                  <div className="mt-10 flex items-center">
                    <button type="submit"
                      className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full min-w-48">
                      Se connecter
                    </button>
                  </div>
                  <div className="mt-1 ml-1 flex items-center justify-left gap-x-6">
                    <Link href="inscription" className="text-sm font-semibold leading-6 text-orange-600">
                      Pas encore membre ? Enregistrez-vous
                    </Link>
                  </div>
                  <div>
                    <div className='mt-10 text-gray-400 block social-connexion-title grid align-items-center '> Réseaux sociaux </div>
                    <div className="mt-10 flex items-center">
                      <button type="button"
                        className="rounded bg-indigo-600  py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full min-w-48 flex justify-center">
                        <Image width="20" height="20" src={"/images/facebook-logo-2021.webp"} /><span>Connexion avec Facebook</span>
                      </button>
                    </div>
                    <div className="mt-2 flex items-center">
                      <button type="button"
                        className="rounded bg-gray-200  py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 w-full min-w-48 flex justify-center">
                        <Image width="20" height="20" src={"/images/logoGoogle.png"} /><span>Connexion avec Google</span>
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