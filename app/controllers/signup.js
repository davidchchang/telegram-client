import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['session'],
  isLoggedIn: Ember.computed.alias('controllers.session.isAuthenticated'),

  actions: {
    signUp: function () {

      var controller = this;
      // Dependency injection provides the store object to the controller instance.
      this.store.find('user').then(function (items) {
        //controller.set('items', items);
      });

      var user = this.store.createRecord('user', {
        id: this.get('model').id,
        password: this.get('model').password,
        operation: 'signup'
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
      });
    }
  }
});
