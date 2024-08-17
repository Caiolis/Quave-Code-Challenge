import React, { useState } from 'react';
import { Button } from '@headlessui/react';
import { formatDate } from '../../utils/formatDate';
import { Meteor } from 'meteor/meteor';
import '../../people/people';

export function PeopleCard({
  firstName,
  lastName,
  title,
  companyName,
  index,
  personId,
  checkInDate,
}) {
  const [checkInCurrentDate, setCheckInCurrentDate] = useState('N/A');

  const updateData = async (currentPersonId, currentDate) => {
    try {
      const response = await Meteor.callAsync(
        'people.checkIn',
        currentPersonId,
        currentDate
      );
      return response;
    } catch (err) {
      console.error('Erro ao atualizar dados:', err);
      return err;
    }
  };

  const checkIn = async () => {
    if (checkInDate) return checkInDate;
    const currentDate = formatDate();
    const resp = await updateData(personId, currentDate);
    setCheckInCurrentDate(currentDate);
    return resp;
  };

  return (
    <div
      className={`mt-6 flex w-full max-w-full items-center justify-between rounded p-4 ${index % 2 !== 0 ? 'bg-gray-100' : ''}`}
    >
      <div className="h-full w-full max-w-full">
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
      <div className="flex h-full w-full max-w-full flex-col items-center">
        <h3 className="mb-2 text-base font-semibold">Check-In Date</h3>
        <p className="text-sm font-normal text-gray-500">
          {checkInDate || checkInCurrentDate}
        </p>
      </div>
      <div className="flex h-full w-full max-w-full flex-col items-center">
        <h3 className="mb-2 text-base font-semibold">Check-Out Date</h3>
        <p className="text-sm font-normal text-gray-500">
          {checkInDate || checkInCurrentDate}
        </p>
      </div>
      <div className="flex h-full w-full max-w-full flex-col">
        <Button
          className="w-full max-w-60 self-end rounded bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-all data-[hover]:bg-indigo-500"
          onClick={checkIn}
        >
          Check-in {firstName} {lastName}
        </Button>
      </div>
    </div>
  );
}
