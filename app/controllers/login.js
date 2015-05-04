import Ember from 'ember';
import AccountController from './account.js';

export default AccountController.extend({
  actions: {
    login: function () {
      var controller = this;

      // Dependency injection provides the store object to the controller instance.
      this.store.find('user').then(function (items) {
        //controller.set('items', items);
      });

      var user = this.store.createRecord('user', {
        id: this.get('username'),
        password: this.get('password'),
        operation: 'login'
      });

      user.save().then(function (user) {
        // Your user was saved. You can now redirect to the dashboard.

        // There is an alias to the session property, so this change propagates
        // to the session object then the IndexController.
        this.set('isLoggedIn', true);

        // Redirect to login
        this.transitionToRoute('account.home');
      }, function (response) {
        // TODO Handle errors (E.g. if the user already exists)
        console.dir(response);
      });
    }
  }
});
