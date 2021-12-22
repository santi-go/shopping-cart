import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping cart', function (hooks) {
  setupApplicationTest(hooks);

  test('adding to cart and visiting /shopping-cart', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    
    assert.dom('.beverage-details button.add-to-cart').hasText('Add to cart');
    await click('.beverage-details button.add-to-cart');

    assert.dom('nav .cart-count').hasText('1');

    assert.equal(currentURL(), '/shopping-cart');
  });

  test('visiting /', async function (assert) {
    await visit('/shopping-cart');

    assert.equal(currentURL(), '/shopping-cart');
    assert.dom('nav').exists();

    assert.dom('a.menu-index h1').hasText('Beverages & Fruit');
    await click('a.menu-index h1');

    assert.equal(currentURL(), '/');
  });

  test('visiting /checkout', async function (assert) {
    await visit('/shopping-cart');

    assert.equal(currentURL(), '/shopping-cart');
    
    assert.dom('button.btn.btn-success').hasText('Check out');
    await click('button.btn.btn-success');

    assert.equal(currentURL(), '/checkout');
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
