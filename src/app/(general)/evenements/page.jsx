import React from 'react';

const events = [1,2,3,4,5,6]
const page = () => {
        return (
            <div>
            {events.map(e=>{
                return (
                    <div className='flex flex-row'>
                <div className="flex flex-col w-1/3 items-start">
                    <img
                    className="rounded-lg"
                    src="https://picsum.photos/300/200"
                    width="300"
                    height="200"
                    />
                    <h2>Bal des pompiers</h2>
                <div>
                    <i>\!/</i>Lille
                </div>
                <div className="flex">
                  <div>
                    <i>|=|</i>7 déc,2023
                  </div>
                  <div className="ml-10">
                    <i>('-)</i>20h02
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="background-gray-200 w-100 h-100 rounded block">(a)</div>
                  </div>
                  <div className="ml-10">
                    <i>('-)</i>20h02
                  </div>
                </div>
              </div>
            </div>
                )
            }
            
        )}
        </div>)
};

export default page;