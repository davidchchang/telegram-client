import Ember from 'ember';
import PostLogicMixin from '../../../mixins/post-logic';
import { module, test } from 'qunit';

module('Unit | Mixin | post logic');

// Replace this with your real tests.
test('it works', function(assert) {
  var PostLogicObject = Ember.Object.extend(PostLogicMixin);
  var subject = PostLogicObject.create();
  assert.ok(subject);
});
