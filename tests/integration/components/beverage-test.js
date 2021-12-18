import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | beverage', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a beverage', async function (assert) {
    await render(hbs`<Beverage />`);

    assert.dom('article').hasClass('beverage');
    assert.dom('article h3').hasText('Green tea');
    assert.dom('article .detail.price').includesText('3.11');
    assert.dom('article .image').exists();
  });
});
