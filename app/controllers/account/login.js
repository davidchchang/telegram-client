import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  username: '',
  password: '',

  errorText: '',

  actions: {
    login: function () {
      var controller = this,
        user = null,
        userid = this.get('username');

      this.store.find('user', userid).then(function(model) {
        user = model;

        user.setProperties({
          id: userid,
          password: controller.get('password'),
          operation: 'login'
        });

        // invokes PUT request on server
        user.save().then(function (user) {
          controller.set('session.authenticatedUser', user);
          controller.transitionToRoute('dashboard');
        }, function (response) {
          // user exists, but password was incorrect
          if (response.responseText) {
            controller.set('errorText', response.responseText);
          } else {
            controller.set('errorText', 'Oops... an error occurred');
          }
        });
      }, function(response) {
        // user doesn't exist yet
        if (response.responseText) {
          controller.set('errorText', response.responseText);
        } else {
          controller.set('errorText', 'Oops... an error occurred');
        }
      });
    }
  }
});
