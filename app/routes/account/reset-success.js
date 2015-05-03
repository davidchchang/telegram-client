import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    // TODO: confirm whether this is the right place for redirection logic
    if (controller.get('isLoggedIn')) {
      controller.transitionToRoute('account.home');
    }
  }
});
