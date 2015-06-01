import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  username: '',
  password: '',

  errorText: '',

  actions: {
    login: function () {
      var controller = this,
        userid = this.get('username');

      var user = this.store.getById('user', userid);

      var fieldsHash = {
        id: userid,
        password: this.get('password'),
        operation: 'login'
      };

      if (!user) {
        user = this.store.createRecord('user', fieldsHash);
      } else {
        user.setProperties(fieldsHash);
      }

      // invokes PUT request on server if exists, otherwise POST
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
    }
  }
});
