import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function(transition) {
    if (this.get('session.authenticatedUser') === null) {
      this.transitionTo('account.login');
    }
  },

  model: function () {
    var self = this;
    return Ember.RSVP.hash({
      posts: self.store.find('post', {dashboard: true}).then(function(posts){
        return posts.sortBy('timestamp').reverse();
      }),
      user: self.get('session.authenticatedUser')
    });
  },

  setupController: function(controller, hash) {
    controller.set('model', hash);
    controller.set('content', hash.posts);
    controller.set('user', hash.user);
  }
});
