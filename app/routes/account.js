import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    // TODO: confirm whether this is the right place for redirection logic
    controller.set('model', model);
    if (!controller.get('isLoggedIn')) {
      controller.transitionToRoute('account.login');
    }
  }
});
