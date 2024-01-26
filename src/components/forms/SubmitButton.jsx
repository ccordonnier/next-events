import React from 'react';

const SubmitButton = (props) => {
  let item=props.item;
  return (
    <div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" onClick={props.submitForm} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {item.value}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;