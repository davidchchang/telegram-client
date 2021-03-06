import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function(transition) {
    if (this.get('session.authenticatedUser') === null) {
      this.transitionTo('account.login');
    }
  },

  model: function () {
    return this.store.find('post', {dashboard: true});
  }
});
