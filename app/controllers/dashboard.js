import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  content: null,
  user: null,

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
      if (this.get('charactersRemaining') === 140) {
        alert('Content cannot be blank');
        return;
      }

      var post = this.store.createRecord('post', {
        author: this.get('user'),
        content: this.get('newPost'),
        operation: 'newPost'
      });

      post.save().then(function (post) {
        alert('post saved');
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
    deletePost: function() {
      alert('deleting');
    },
    repost: function() {
      alert('reposting');
    }
  }
});
