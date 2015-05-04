import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'login', // TODO: doesn't Ember make assumptions about the controller name based on the route?

  setupController: function (controller, model) {
    // TODO: confirm whether this is the right place for redirection logic
    if (controller.get('isLoggedIn')) {
      controller.transitionToRoute('account.home');
    }
  }
});
