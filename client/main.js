import React from 'react';
import '../communities/communities';
import '../people/people';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import { App } from '../ui/App';

Meteor.startup(() => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
});
