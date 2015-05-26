import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function() {
    this.set('session.authenticatedUser', null);
    this.store.unloadAll('user');
    this.store.unloadAll('post');
    this.transitionTo('account.login');
  }
});
