import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  model: null, // model is a RSVP hash { posts; user }

  newPost: '',

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

  actions: {
    publish: function() {
      var controller = this;

      if (this.get('charactersRemaining') === 140) {
        alert('Content cannot be blank');
        return;
      }

      var post = this.store.createRecord('post', {
        author: this.get('model.user'),
        content: this.get('newPost'),
        operation: 'newPost'
      });

      post.save().then(function (post) {
        alert('post saved');

        // TODO: figure out why model (RSVP hash) is not updated?

        // clear post contents
        controller.set('newPost', '');
      }, function (response) {
        if (response.responseText) {
          alert(response.responseText);
          //controller.set('errorText', response.responseText);
        } else {
          alert('Oops');
          //controller.set('errorText', 'Oops... an error occurred');
        }
      });
    },
    deletePost: function(post) {
      if (confirm("Delete this post? This action cannot be reversed.")) {
        // TODO: confirm this is the user's post
        this.store.find('post', post.get('id')).then(function (post) {
          post.deleteRecord();
          post.save() // => DELETE to /posts/id
            .then(function (post){
            alert('post deleted');
          }, function (response) {
              if (response.responseText) {
                alert(response.responseText);
                //controller.set('errorText', response.responseText);
              } else {
                alert('Oops');
                //controller.set('errorText', 'Oops... an error occurred');
              }
            });
        });
      }
    },
    repost: function() {
      alert('reposting');
    }
  }
});
