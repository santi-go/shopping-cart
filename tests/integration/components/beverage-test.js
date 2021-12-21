import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | beverage', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a beverage', async function (assert) {
    this.setProperties({
      beverage: {
        name: 'Green Tea',
        price: 3.11,
        image:
          '/assets/images/green-tea.png',
      },
    });

    await render(hbs`<Beverage @beverage={{this.beverage}} />`);

    assert.dom('div').hasClass('beverage');
    assert.dom('h3').hasText('Green Tea');
    assert.dom('.detail.price').includesText('3.11');
    assert.dom('img').exists().hasAttribute('src', '/assets/images/green-tea.png');
  });
});
