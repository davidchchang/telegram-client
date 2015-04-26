import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string') // should be unique
});

User.reopenClass({
  FIXTURES: [
    {
      id: "davidchchang",
      name: "David Chang",
      email: "david@telegram.com"
    },
    {
      id: "andreisoare",
      name: "Andrei Soare",
      email: "andrei@telegram.com"
    },
    {
      id: "octavdruta",
      name: "Octav Druta",
      email: "octav@telegram.com"
    }
  ]
});

export default User;
