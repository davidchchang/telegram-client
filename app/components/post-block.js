import Ember from 'ember';

export default Ember.Component.extend({

  belongsToAuthenticatedUser: function() {
    return this.get('post.author.id') === this.get('session.authenticatedUser.id');
  }.property('post'),

  actions: {
    repost: function() {
      this.sendAction('repost', this.get('post'));
    },
    deletePost: function(post) {
      this.sendAction('deletePost', this.get('post'));
    }
  }
});
