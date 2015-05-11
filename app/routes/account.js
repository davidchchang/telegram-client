import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    if (this.controllerFor('session').get('isAuthenticated')) {
      this.transitionTo('account.home');
    } else if (transition.targetName === 'account.index') {
      // not logged in
      this.transitionTo('account.login');
    }
  }
});
