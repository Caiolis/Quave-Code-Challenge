import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Communities = new Mongo.Collection('communities');

Meteor.methods({
  'communities.get'() {
    return Communities.find().fetchAsync();
  },
});
