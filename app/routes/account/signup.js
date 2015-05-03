import Ember from 'ember';
import User from '../../models/user.js';

export default Ember.Route.extend({
  controllerName: 'signup',

  model: function () {
    return this.store.createRecord('user');
  },

  setupController: function (controller, model) {
    if (controller.get('isLoggedIn')) {
      controller.transitionToRoute('account.home');
    }
    controller.set("model", model);
  }
});
