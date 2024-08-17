import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const People = new Mongo.Collection('people');

Meteor.methods({
  'people.get'() {
    return People.find({}, { limit: 20 }).fetchAsync();
  },
  'people.getByCommunity'(communityId) {
    return People.find({ communityId }, { limit: 20 }).fetchAsync();
  },
  'people.checkIn'(personId, currentDate) {
    return People.updateAsync(
      { _id: personId },
      {
        $set: {
          checkInDate: currentDate,
        },
      }
    );
  },
});
