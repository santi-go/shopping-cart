import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping cart', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Beverages');
    assert.dom('h2').hasText('Beverages Placeholder');

    assert.dom('.jumbo a.button').hasText('Go to Cart');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/cart');
  });

  test('visiting /cart', async function (assert) {
    await visit('/cart');

    assert.equal(currentURL(), '/cart');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Beverages');
    assert.dom('h2').hasText('Cart Placeholder');

    assert.dom('.jumbo a.button').hasText('Go to Home');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Beverages');
    assert.dom('nav a.menu-cart').hasText('Cart');

    await click('nav a.menu-cart');
    assert.equal(currentURL(), '/cart');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
