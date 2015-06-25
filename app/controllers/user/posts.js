import Ember from 'ember';
import PostLogicMixin from '../../mixins/post-logic';

export default Ember.Controller.extend(PostLogicMixin, {

  sortedPosts: function() {
    return this.get('model').sortBy('timestamp').reverseObjects();
  }.property('model.@each.timestamp'),

  actions: {
    // generic error handler
    error: function(reason) {
      alert(reason);
    }
  }

});
