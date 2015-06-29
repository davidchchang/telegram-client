import Ember from 'ember';
import UserLogicMixin from '../../mixins/user-logic';

export default Ember.Controller.extend(UserLogicMixin, {

  sortedUsers: function() {
    return this.get('model').sortBy('timestamp').reverseObjects();
  }.property('model.@each.timestamp'),

  actions: {
    // generic error handler
    error: function(reason) {
      alert(reason);
    }
  },

  errorHandler: function(response) {
    if (response.responseText) {
      alert(response.responseText);
    } else {
      alert('Oops');
    }
  }
});
