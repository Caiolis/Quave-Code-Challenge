import React from 'react';
import { Header } from './components/Header';
import { SelectMenu } from './components/SelectMenu';

export const App = () => (
  <div className="flex h-screen flex-col items-center bg-gray-100">
    <Header />
    <div className="h-screen w-1/2 bg-red-600 px-16 py-10">
      <div className="w-full rounded bg-white p-10 shadow-lg">
        <SelectMenu />
      </div>
    </div>
  </div>
);
