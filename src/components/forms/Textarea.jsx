import React from 'react';

const Textarea = (props) => {
  let item=props.item;
  return (
    <>
      <label htmlFor="title" className="block text-md leading-6 text-gray-900">
        {item.label}
      </label>
      <div>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 w-full">
          <textarea name={item.name} defaultValue={item.value??""} className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    </>
  );
};

export default Textarea;