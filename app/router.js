import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login', {
    path: '/'
  });
  this.route('signup');
  this.route('reset');
  this.route('reset-success');
  this.route('home');

  this.resource('user', {
    path: ':user_id'
  }, function() {
    this.route('posts');
    this.route('followers');
    this.route('following');
  });
});
