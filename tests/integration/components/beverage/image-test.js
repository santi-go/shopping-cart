import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | beverage/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    
    await render(hbs`
      <Beverage::Image
      src="/assets/images/green-tea.png"
      alt="Green Tea"
      />
    `);

    assert.dom('.image img')
    .exists()
    .hasAttribute('src', '/assets/images/green-tea.png')
    .hasAttribute('alt', 'Green Tea');
  });
});
