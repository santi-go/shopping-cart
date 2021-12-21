import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping cart', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    
    assert.dom('.add-to-cart').hasText('Add to cart');
    await click('.add-to-cart');

    assert.equal(currentURL(), '/shopping-cart');
  });

  test('visiting /shopping-cart', async function (assert) {
    await visit('/shopping-cart');

    assert.equal(currentURL(), '/shopping-cart');
    assert.dom('nav').exists();

    assert.dom('a.menu-index h1').hasText('Beverages & Fruit');
    await click('a.menu-index h1');

    assert.equal(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index h1').hasText('Beverages & Fruit');
    assert.dom('nav a.cart-link').exists();

    await click('nav a.cart-link');
    assert.equal(currentURL(), '/shopping-cart');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
