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
      posts: self.store.find('post').then(function(posts){
        return posts.sortBy('timestamp').reverse();
      }),
      user: self.get('session.authenticatedUser')
    });
  }
});
