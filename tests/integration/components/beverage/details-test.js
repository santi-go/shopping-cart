import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | beverage/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('beverage', {
      name: "Green tea",
      price: 3.11,
      offer: "buy-one-get-one-free"
    })

    await render(hbs`<Beverage::Details @beverage={{this.beverage}} />`);
    assert.dom('h3').hasText('Green tea');
    assert.dom('.detail.price').hasText('Price: £3.11');
    assert.dom('.detail.offer').hasText('Offer: buy-one-get-one-free');
  });
});
