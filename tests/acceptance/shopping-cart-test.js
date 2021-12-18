import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping cart', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Beverages Placeholder');

    assert.dom('.jumbo a.button').hasText('Go to Cart');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/cart');
  });
});
