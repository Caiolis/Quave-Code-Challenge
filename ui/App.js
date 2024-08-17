import React, { useState } from 'react';
import { Header } from './components/Header';
import { SelectMenu } from './components/SelectMenu';
import { PeopleList } from './components/PeopleList';

export const App = () => {
  const [selected, setSelected] = useState(null);
  const [communityId, setCommunityId] = useState(null);

  return (
    <div className="flex h-full min-h-screen flex-col items-center bg-gray-100">
      <Header />
      <div className="w-full px-16 py-10">
        <div className="w-full rounded bg-white p-10 shadow-lg">
          <SelectMenu
            selected={selected}
            setSelected={setSelected}
            setCommunityId={setCommunityId}
          />
        </div>

        <div className="mt-6 w-full rounded bg-white p-8 shadow-lg">
          <PeopleList selected={selected} communityId={communityId} />
        </div>
      </div>
    </div>
  );
};
