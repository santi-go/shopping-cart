import Model, { attr } from '@ember-data/model';

export default class BeverageModel extends Model {
  @attr name;
  @attr price;
  @attr image;
  @attr('number', { defaultValue: 0 }) quantity;

  updateQuantity(quantity) {
    this.quantity = quantity;
  }
}
