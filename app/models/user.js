import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'), // should be unique
  followedByCurrentUser: DS.attr('boolean')
});

export default User;
