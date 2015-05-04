import Ember from 'ember';
import AccountController from './account.js';

export default AccountController.extend({
  errorText: '',
  actions: {
    login: function () {
      var controller = this;

      var user = this.store.createRecord('user', {
        id: this.get('username'),
        password: this.get('password'),
        operation: 'login'
      });

      user.save().then(function (user) {
        // Your user was saved. You can now redirect to the dashboard.

        // There is an alias to the session property, so this change propagates
        // to the session object then the IndexController.
        controller.set('controllers.session.isAuthenticated', true);

        // Redirect to landing page
        controller.transitionToRoute('account.home');
      }, function (response) {
        if (response.responseText) {
          controller.set('errorText', response.responseText);
        } else {
          controller.set('errorText', 'Oops... an error occurred');
        }
      });
    }
  }
});
