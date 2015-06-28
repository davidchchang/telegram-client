import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function(transition) {
    if (this.get('session.authenticatedUser') === null) {
      this.transitionTo('account.login');
    }
  },

  setupController: function(controller, model) {
    controller.set('user', model);
  },

  model: function(params, transition) {
    return this.store.find('user', transition.params.user.user_id);
  }
});
