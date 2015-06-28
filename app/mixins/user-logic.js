import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    /**
     * Toggles whether the current user is following this user.
     *
     * @param user user to follow/unfollow
     */
    follow: function (user) {
      var controller = this;

      user.setProperties({
        operation: user.followedByCurrentUser ? 'unfollow' : 'follow',
        followedByCurrentUser: !user.followedByCurrentUser
      });

      user.save().then(function (user) {
        controller.set('user', user);
      }, controller.errorHandler.bind(controller));
    }
  }
});
