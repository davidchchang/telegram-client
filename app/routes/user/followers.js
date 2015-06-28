import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function (params, transition) {
    var currentUser = this.get('session.authenticatedUser');
    var userId = transition.params.user.user_id;
    return Ember.$.getJSON('/api/users/' + userId + '/followers', {
      data: {
        authenticatedUser: currentUser
      }
    });
  }
});
