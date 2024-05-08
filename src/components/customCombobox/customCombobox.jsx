import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const CustomCombobox = ({data, inputName}) => {
  const [selectedData, setSelectedData] = useState("")
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? data
      : data.filter((row) => {
          return row.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox className="h-full" nullable as={"div"} value={selectedData} onChange={setSelectedData} onClose={() => setQuery('')}>
      <Combobox.Input
        aria-label="Assignee"
        displayValue={(data) => data?.name}
        onChange={(event) => setQuery(event.target.value)}
        name={inputName} 
        placeholder={"Une ville ..."}
        className="block w-full border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
      />
      <Combobox.Options anchor="bottom" style={{backgroundColor:"blue"}}>
        {filteredPeople.map((person) => (
          <Combobox.Option as={Fragment} key={person.id} value={person} className="p-2 hover:bg-orange-200 bg-white shadow-md cursor-pointer" >
            {({ focus, selected }) => (
              <div className={clsx('group flex gap-2', focus && 'bg-blue-100')}>
                {selected && <CheckIcon className="size-5" />}
                {person.name}
              </div>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}

export default CustomCombobox;