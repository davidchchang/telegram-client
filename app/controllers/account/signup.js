import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  username: '',
  password: '',
  name: '',
  email: '',

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
        controller.set('session.authenticatedUser', user);
        controller.transitionToRoute('dashboard');
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
