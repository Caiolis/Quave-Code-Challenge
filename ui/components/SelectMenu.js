import React, { useState, useEffect } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Meteor } from 'meteor/meteor';
import '../../communities/communities';

export function SelectMenu({ selected, setSelected, setCommunityId }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (selected) {
      setCommunityId(selected._id);
    }
  }, [selected, setCommunityId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await Meteor.callAsync('communities.get');
        return setData(resp);
      } catch (err) {
        return err;
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {selected ? selected.name : 'Select an event'}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {data.map((community) => (
            <ListboxOption
              key={community._id}
              value={community}
              className="group relative cursor-default select-none py-2 pl-1 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {community.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
