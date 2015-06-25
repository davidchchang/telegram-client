import Ember from 'ember';
import UserLogicMixin from '../../../mixins/user-logic';
import { module, test } from 'qunit';

module('Unit | Mixin | user logic');

// Replace this with your real tests.
test('it works', function(assert) {
  var UserLogicObject = Ember.Object.extend(UserLogicMixin);
  var subject = UserLogicObject.create();
  assert.ok(subject);
});
