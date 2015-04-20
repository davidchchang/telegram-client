import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'), // must be unique
  hashedPassword: DS.attr('string'),
  salt: DS.attr('string'),

  // doesn't seem like this is needed to create an account, but it is required for resetting the password
  // https://www.dropbox.com/sh/3fq2wxngbugdm0y/AACZN_42lWtNJD19Vgc8fjnya?dl=0#lh:null-Create.png)
  email: DS.attr('string'), // unique?

  // TODO: use custom queries to fetch the below
  posts: DS.hasMany('post'),
  followers: DS.hasMany('user'),
  following: DS.hasMany('user')
});

User.FIXTURES = [
  {
    id: 1,
    name: "David Chang",
    username: "davidchchang",
    hashedPassword: "asdf",
    salt: "asdf",
    email: "david@telegram.com",
    posts: [],
    followers: [],
    following: []
  },
  {
    id: 2,
    name: "Andrei Soare",
    username: "andreisoare",
    hashedPassword: "asdf",
    salt: "asdf",
    email: "andrei@telegram.com",
    posts: [],
    followers: [],
    following: []
  },
  {
    id: 3,
    name: "Octav Druta",
    username: "octavdruta",
    hashedPassword: "asdf",
    salt: "asdf",
    email: "octav@telegram.com",
    posts: [],
    followers: [],
    following: []
  }
];

export default User;
