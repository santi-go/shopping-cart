import Model, { attr } from '@ember-data/model';

export default class BeverageModel extends Model {
  @attr name;
  @attr image;
  @attr price;
  @attr offer;
}
