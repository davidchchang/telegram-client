import Ember from 'ember';
import User from '../../models/user.js';

export default Ember.Route.extend({
  controllerName: 'signup',

  setupController: function (controller, model) {
    // TODO: confirm whether this is the right place for redirection logic
    if (controller.get('isLoggedIn')) {
      controller.transitionToRoute('account.home');
    }
  }
});
