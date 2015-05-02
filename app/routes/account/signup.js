import Ember from 'ember';
import User from '../../models/user.js';

export default Ember.Route.extend({
  model: function () {
    var user = this.store.createRecord('user', {
      id: '', // TODO: get this from controller
      password: '',
      operation: 'signup'
    });

    user.save().then(function(user) {
      // Your user was saved. You can now redirect to the dashboard.
    }, function(response) {
      // Handle error
    });

    return user;
  },

  setupController: function (controller, model) {
    controller.set("model", model);
  }
});
