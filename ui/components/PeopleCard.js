import React from 'react';
import { Button } from '@headlessui/react';

export function PeopleCard({ firstName, lastName, title, companyName }) {
  return (
    <div className="mt-6 flex w-full items-center justify-between">
      <div>
        <h3 className="text-base font-semibold">
          {firstName} {lastName}
        </h3>
        <p className="text-sm font-medium text-indigo-600">
          Title: {title || 'N/A'}
        </p>
        <p className="text-sm font-normal text-gray-500">
          Company Name: {companyName || 'N/A'}
        </p>
      </div>
      <div>
        <Button className="rounded bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-all data-[hover]:bg-indigo-500">
          Check-in {firstName} {lastName}
        </Button>
      </div>
    </div>
  );
}
