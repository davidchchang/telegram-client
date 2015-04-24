import DS from 'ember-data';

var Post = DS.Model.extend({
  owner: DS.belongsTo('user', {
    async: true
  }),
  // originalPost will be set if this is a re-post
  originalPost: DS.belongsTo('post', {
    async: true
  }),
  content: DS.attr('string'),
  timestamp: DS.attr('date')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      owner: "davidchchang",
      originalPost: null,
      content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
      timestamp: new Date("2015-03-24")
    },
    {
      id: 2,
      owner: "andreisoare",
      originalPost: 1,
      content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
      timestamp: new Date("2015-03-25")
    },
    {
      id: 3,
      owner: "andreisoare",
      originalPost: null,
      content: "My answer to What are the advantages of using Ember.js? http://qr.ae/qVycR",
      timestamp: new Date("2014-12-17")
    }
  ]
});

export default Post;
