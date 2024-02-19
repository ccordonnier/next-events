"use client"
import useFetchEvents from '@/hooks/useFetchEvents';
import React, { useState } from 'react';

const CategorieList = () => {
  const [options, setOptions] = useState({})
  const [urlApi, setUrlAPI] = useState("http://localhost:3001/api/categories");
  const [categories, error, state] = useFetchEvents(urlApi,options);

  return (
    <div className='flex flex-wrap row gap-5 mx-[10vw] justify-center cursor-pointer'>
      {state=="loading" && <div>Chargement ...</div>}
      {state=="succeeded" && categories.map((categorie)=>{
        return (
          <div className="border-black border-2 border-solid rounded hover:bg-orange-500 hover:text-white hover:border-transparent px-6 py-4" key={categorie._id}>{categorie.name}</div>
        )
      })}
    </div>
  );
};

export default CategorieList;