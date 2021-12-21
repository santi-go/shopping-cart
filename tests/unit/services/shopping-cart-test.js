import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | shopping-cart', function (hooks) {
  setupTest(hooks);

  test('addItem method works', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    assert.equal(service.itemList.length, 0, 'item list is empty');
    service.addItem({});
    assert.equal(service.itemList.length, 1, 'item list size increase by 1');
  })

  test('remove method works', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    assert.equal(service.itemList.length, 0, 'item list is empty');
    service.addItem({});
    assert.equal(service.itemList.length, 1, 'item list size increase by 1');
    service.remove({});
    assert.equal(service.itemList.length, 0, 'item list size decrease by 1');
  })

  test('removeAll method works', function(assert) {
    const service = this.owner.lookup('service:shopping-cart');
    assert.equal(service.itemList.length, 0, 'item list is empty');
    service.addItem({});
    assert.equal(service.itemList.length, 1, 'item list size increase by 1');
    service.removeAll();
    assert.equal(service.itemList.length, 0, 'item list it\'s empty');
  })
});
