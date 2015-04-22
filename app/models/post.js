import DS from 'ember-data';

var Post = DS.Model.extend({
  owner: DS.belongsTo('user', {
    async: true
  }),
  author: DS.belongsTo('user', {
    async: true
  }),
  content: DS.attr('string'),
  timestamp: DS.attr('date')

  // FOLLOWUP:
  // - what happens when the original author deletes their post? do all reposts get deleted as well?
  // - what happens if the original author no longer exists?
  // - when a post is reposted, is the original timestamp displayed?
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      owner: 1,
      author: 1,
      content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
      timestamp: new Date("2015-03-24")
    },
    {
      id: 2,
      owner: 2,
      author: 1,
      content: "Spot on - https://www.youtube.com/watch?v=vVw1aPUybB8 #internet #party",
      timestamp: new Date("2015-03-25")
    },
    {
      id: 3,
      owner: 2,
      author: 2,
      content: "My answer to What are the advantages of using Ember.js? http://qr.ae/qVycR",
      timestamp: new Date("2014-12-17")
    }
  ]
});

export default Post;
