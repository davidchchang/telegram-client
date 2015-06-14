import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    deletePost: function(post) {
      var controller = this;

      if (confirm("Delete this post? This action cannot be reversed.")) {
        post.deleteRecord();
        post.save() // => DELETE to /posts/id
          .then(function (post) {
            controller.get('model').removeObject(post);
          }, controller.errorHandler.bind(controller));
      }
    },

    repost: function (post) {
      var controller = this;

      var newPost = this.store.createRecord('post', {
        author: this.get('session.authenticatedUser'),
        postContent: post.get('postContent'),
        originalPost: post,
        operation: 'repost'
      });

      newPost.save().then(function (post) {
        controller.get('model').addObject(post);
      }, controller.errorHandler.bind(controller));
    }
  }
});
