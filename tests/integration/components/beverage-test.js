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
          'https://upload.wikimedia.org/wikipedia/commons/f/fe/Small_cup_of_green_tea.jpg',
      },
    });

    await render(hbs`<Beverage @beverage={{this.beverage}} />`);

    assert.dom('article').hasClass('beverage');
    assert.dom('article h3').hasText('Green Tea');
    assert.dom('article .detail.price').includesText('3.11');
    assert.dom('article .image').exists();
  });
});
