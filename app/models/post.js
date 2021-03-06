import DS from 'ember-data';

var Post = DS.Model.extend({
  author: DS.belongsTo('user', {
    async: true
  }),
  // originalPost will be set if this is a re-post
  originalPost: DS.belongsTo('post', {
    async: false,
    inverse: null // one-way relationship to prevent original post from being updated
  }),
  content: DS.attr('string'),
  timestamp: DS.attr('date')
});

export default Post;
