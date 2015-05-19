import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  content: null,
  user: null
});
