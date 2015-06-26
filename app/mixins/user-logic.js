import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    follow: function (user) {
      var controller = this;

      var newFollow = this.store.createRecord('user', {
        name: user.name,
        operation: 'follow'
      });

      newFollow.save().then(function (user) {
        // TODO: update UI as followed
      }, controller.errorHandler.bind(controller));
    }
  }
});
