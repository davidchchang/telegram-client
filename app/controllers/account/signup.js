import Ember from 'ember';
import AccountController from '../account.js';

export default AccountController.extend({
  actions: {
    signUp: function () {
      var controller = this;

      var user = this.store.createRecord('user', {
        id: this.get('username'),
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password'),
        operation: 'signup'
      });

      user.save().then(function (user) {
        // Your user was saved. You can now redirect to the dashboard.

        // There is an alias to the session property, so this change propagates
        // to the session object then the IndexController.
        controller.set('session.authenticatedUser', user);

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
