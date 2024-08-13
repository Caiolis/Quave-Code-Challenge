import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { PeopleCard } from './PeopleCard';
import '../../communities/communities';
import '../../people/people';

export function PeopleList({ selected, communityId }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await Meteor.callAsync(
          'people.getByCommunity',
          communityId
        );
        return setData(resp);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, [communityId]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex w-full items-center justify-between text-base font-semibold">
        <h2 className="text-xl">List of people in the current event</h2>
        <h2 className="text-2xl font-semibold text-indigo-600">
          {selected ? selected.name : 'Choose an event'}
        </h2>
      </div>
      <hr className="mt-3" />
      {selected ? (
        data.map((people) => (
          <PeopleCard
            key={people._id}
            firstName={people.firstName}
            lastName={people.lastName}
            title={people.title}
            companyName={people.companyName}
          />
        ))
      ) : (
        <p className="mt-3 text-center">
          Choose an event to see it's participants
        </p>
      )}
    </div>
  );
}
