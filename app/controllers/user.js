import Ember from 'ember';
import UserLogicMixin from '../mixins/user-logic';

export default Ember.Controller.extend(UserLogicMixin, {
  session: Ember.inject.service('session'),

  errorHandler: function(response) {
    if (response.responseText) {
      alert(response.responseText);
    } else {
      alert('Oops');
    }
  },

  actions: {
    // TODO: move to followers/following mixin?
    follow: function() {
      var controller = this;
    }
  }
});
