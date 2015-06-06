import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  newPost: '',

  sortedPosts: function() {
    return this.get('model').sortBy('timestamp').reverseObjects();
  }.property('model.@each.timestamp'),

  charactersRemaining: function () {
    return 140 - this.get('newPost').length;
  }.property('newPost'),

  charactersRemainingText: function () {
    var remaining = this.get('charactersRemaining');
    return remaining + ' character' + (remaining === 1 ? '' : 's');
  }.property('charactersRemaining'),

  canPublish: function() {
    return this.get('charactersRemaining') >= 0;
  }.property('charactersRemaining'),

  errorHandler: function(response) {
    if (response.responseText) {
      alert(response.responseText);
      //this.set('errorText', response.responseText);
    } else {
      alert('Oops');
      //this.set('errorText', 'Oops... an error occurred');
    }
  },

  actions: {
    publish: function() {
      if (!this.get('canPublish')) {
        return;
      }

      var controller = this;

      if (this.get('charactersRemaining') === 140) {
        alert('Content cannot be blank');
        return;
      }

      var post = this.store.createRecord('post', {
        author: this.get('session.authenticatedUser'),
        content: this.get('newPost'),
        operation: 'newPost'
      });

      post.save().then(function(post) {
        controller.set('newPost', '');
        controller.get('model').addObject(post);
      }, controller.errorHandler.bind(controller));
    },

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

    repost: function(post) {
      if (confirm("Repost this to your followers?")) {
        var controller = this;
        // TODO: display repost dialog using HTML

        var newPost = this.store.createRecord('post', {
          author: this.get('session.authenticatedUser'),
          content: post.get('content'),
          originalPost: post,
          operation: 'repost'
        });

        newPost.save().then(function (post) {
          controller.get('model').addObject(post);
        }, controller.errorHandler.bind(controller));
      }
    },

    // generic error handler
    error: function(reason) {
      alert(reason);
    }
  }
});
