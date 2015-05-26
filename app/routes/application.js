import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function() {
    var route = this;
    this.store.find('user', {isAuthenticated: true}).then(function(users) {
      var user = (users || []).get('firstObject') || null;
      route.set('session.authenticatedUser', user);
    });
  }
});
