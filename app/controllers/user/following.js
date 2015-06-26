import Ember from 'ember';

export default Ember.Controller.extend({

  sortedUsers: function() {
    return this.get('model').sortBy('timestamp').reverseObjects();
  }.property('model.@each.timestamp'),

  actions: {
    // generic error handler
    error: function(reason) {
      alert(reason);
    }
  }
});
