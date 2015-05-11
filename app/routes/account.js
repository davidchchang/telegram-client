import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    if (this.controllerFor('session').get('isAuthenticated')) {
      this.transitionTo('account.home');
    }
  }
});
