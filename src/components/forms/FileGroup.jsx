import React from 'react';
import {PhotoIcon} from '@heroicons/react/20/solid';

const Filegroup = (props) => {
  let item=props.item;
  return (
    <div>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label htmlFor={item.id}
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Téléchargez un fichier</span>
                <input id={item.id} name={item.name} type="file" className="sr-only" />
              </label>
              <p className="pl-1">ou glissez votre fichier ici</p>
             </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF Maximum 10MB</p>
           </div>
         </div>
    </div>
  );
};

export default Filegroup;