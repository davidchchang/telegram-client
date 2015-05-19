import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function() {
    this.set('session.authenticatedUser', null);
    this.transitionTo('account.login');
  }
});
