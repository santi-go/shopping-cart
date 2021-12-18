import Model, { attr } from '@ember-data/model';

export default class BeverageModel extends Model {
  @attr name;
  @attr price;
  @attr image;
  @attr quantity;

  set updateQuantity(quantity) {
    this.quantity = quantity;
  }
}
