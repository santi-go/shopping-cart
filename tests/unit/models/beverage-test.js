import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | beverage', function (hooks) {
  setupTest(hooks);

  test('it has the right attributes', function (assert) {
    let store = this.owner.lookup('service:store');
    let beverage = store.createRecord('beverage', {
      id: 'GR1',
      name: 'Green tea',
      price: 3.11,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/fe/Small_cup_of_green_tea.jpg',
      quantity: 2,
    });

    assert.equal(beverage.name, 'Green tea');
    assert.equal(beverage.price, 3.11);
    assert.equal(beverage.quantity, 2);
  });
});
