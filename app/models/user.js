import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'), // must be unique, see below to return as primaryKey
  hashedPassword: DS.attr('string'),
  salt: DS.attr('string'),

  // doesn't seem like this is needed to create an account, but it is required for resetting the password
  // https://www.dropbox.com/sh/3fq2wxngbugdm0y/AACZN_42lWtNJD19Vgc8fjnya?dl=0#lh:null-Create.png)
  email: DS.attr('string'), // should be unique

  // TODO: use custom queries to fetch the below
  posts: DS.hasMany('post'),
  followers: DS.hasMany('user'),
  following: DS.hasMany('user'),

  createdAt: DS.attr('string', {
    defaultValue: function() { return new Date(); }
  })
});

/*
 TODO: Use custom serializer to map primaryKey to username field

 App.UserSerializer = DS.JSONSerializer.extend({
   primaryKey: 'username'
 });

 */

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "David Chang",
      username: "davidchchang",
      hashedPassword: "asdf",
      salt: "asdf",
      email: "david@telegram.com",
      posts: [1],
      followers: [2, 3],
      following: [2, 3]
    },
    {
      id: 2,
      name: "Andrei Soare",
      username: "andreisoare",
      hashedPassword: "asdf",
      salt: "asdf",
      email: "andrei@telegram.com",
      posts: [2, 3],
      followers: [1, 3],
      following: [1, 3]
    },
    {
      id: 3,
      name: "Octav Druta",
      username: "octavdruta",
      hashedPassword: "asdf",
      salt: "asdf",
      email: "octav@telegram.com",
      posts: [],
      followers: [1, 2],
      following: []
    }
  ]
});

export default User;
