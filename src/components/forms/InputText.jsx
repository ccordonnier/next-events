import React from 'react';

const InputText = (props) => {
  let item=props.item;
  let value;
  if(item.type === "date"){
    let date = new Date(item.value);
    let month = date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
    let day = date.getMonth() < 10 ? "0"+date.getMonth() : date.getMonth();
    value = date.getFullYear()+"-"+month+"-"+day;
    console.log(value);
  }else{
    value = item.value
  }
  
  return (
    <>
      <label htmlFor="title" className="block text-md leading-6 text-gray-900">
        {item.label}
      </label>
      <div>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 w-full">
          <input type={item.type}  name={item.name} id={item.id} autoComplete={item.id} placeholder={item.placeholder} defaultValue={value??""} className="block flex-1 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    </>
  );
};

export default InputText;