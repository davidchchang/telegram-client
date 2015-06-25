import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  model: function (params, transition) {
    return this.store.find('post', {userid: transition.params.user.user_id});
  }
});
