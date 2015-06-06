import Ember from 'ember';

export default Ember.Component.extend({

  repostPromptVisible: false,

  belongsToAuthenticatedUser: function() {
    return this.get('post.author.id') === this.get('session.authenticatedUser.id');
  }.property('post'),

  actions: {
    repostConfirm: function() {
      this.set('repostPromptVisible', true);
    },
    repostDecline: function() {
      this.set('repostPromptVisible', false);
    },
    repost: function() {
      this.sendAction('repost', this.get('post'));
    },
    deletePost: function(post) {
      this.sendAction('deletePost', this.get('post'));
    }
  }
});
