import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BeverageDetailsComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart() {
    const { name, image, price  } = this.args;
    this.cart.addItem({
      name,
      image,
      price,
    });
  }
}
