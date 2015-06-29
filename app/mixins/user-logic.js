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

      // TODO: is there a cleaner way?
      function setPropertiesAndSave(profileUser) {
        profileUser.setProperties({
          operation: profileUser.get('followedByCurrentUser') ? 'unfollow' : 'follow'
        });
        profileUser.save().then(function (user) {
          controller.set('user', user);
          // TODO: trigger model update in following/followers view
        }, controller.errorHandler.bind(controller));
      }

      var profileUser = this.store.getById('user', user.id);
      if (!profileUser) {
        this.store.find('user', user.id).then(function(profileUser) {
          setPropertiesAndSave(profileUser);
        });
      } else {
        setPropertiesAndSave(profileUser);
      }
    }
  }
});
