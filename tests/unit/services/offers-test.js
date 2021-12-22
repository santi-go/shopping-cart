import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | offers', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      products: [
        {
          "id": "GR1",
          "type": "beverage",
          "attributes": {
            "name": "Green tea",
            "price": 3.11,
            "image": "./assets/images/Small_cup_of_green_tea.jpg",
            "offer": "buy-one-get-one-free",
            "count": 2
          }
        },
        {
          "id": "SR1",
          "type": "beverage",
          "attributes": {
            "name": "Strawberries",
            "price": 5.0,
            "image": "./assets/images/Strawberry-Iced-Tea.jpg",
            "offer": "buy 3 or more, price = £4.50 from third item up",
            "count": 3
          }
        },
        {
          "id": "CF1",
          "type": "beverage",
          "attributes": {
            "name": "Coffee",
            "price": 11.23,
            "image": "./assets/images/A_small_cup_of_coffee.jpg",
            "offer": "buy 3 or more, price = £7.49 each"
          }
        }
      ],
    });
  });
  
  // test('getOffer', function(assert) {
  //   const service = this.owner.lookup('service:offers');
  //   assert.equal(this.products[0].id, "GR1", '"GR1"');
  //   let greenTeaDiscount = service.greenTeaOffer(this.products[0]);
  //   assert.equal(greenTeaDiscount, 3.11, 'Green tea discount for 2 items = 3.11');
  // })
});
