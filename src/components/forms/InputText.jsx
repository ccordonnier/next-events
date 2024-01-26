import React from 'react';

const InputText = (props) => {
  let item=props.item;
  return (
    <>
      <label htmlFor="title" className="block text-md leading-6 text-gray-900">
        {item.label}
      </label>
      <div>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 w-full">
          <input type={item.type}  name={item.name} id={item.id} autoComplete={item.id} placeholder={item.placeholder} defaultValue={item.value??""} className="block flex-1 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    </>
  );
};

export default InputText;