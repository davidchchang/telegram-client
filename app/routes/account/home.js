import Ember from 'ember';
import AccountRoute from '../account.js';

export default AccountRoute.extend({
  controllerName: 'account',
  model: function () {
    return this.store.find('post');
  },

  // override parent beforeModel
  beforeModel: function(transition) {
    if (!this.controllerFor('session').get('isAuthenticated')) {
      this.transitionTo('account.login');
    }
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  }
});