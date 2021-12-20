import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavBarComponent extends Component {
  @service ('shopping-cart') cart;

  get itemCount() {
    console.log( this.cart.itemList.length);
    return this.cart.itemList.reduce((total, item) => {
      return total += item.count;
    }, 0);
  }
}
