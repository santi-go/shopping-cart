import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartController extends Controller {
  @service('shopping-cart') cart;
  @service offers;
  @tracked itemsDiscount = 0;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get discount() {
    return this.itemsDiscount;
  }

  get total() {
    return this.subtotal - this.discount;
  }

  @action
  updateItemCount(item, event) {
    item.count = parseInt(event.target.value);
    this.itemsDiscount += this.offers.getOffer(item);
    if (item.count === 0) {
      this.cart.remove(item);
    }
  }

  @action
  removeItem(item) {
    this.cart.remove(item);
  }

  @action
  removeAll() {
    this.cart.removeAll();
    this.itemsDiscount = 0;
  }

  @action
  disableKeyInput() {
    let collection = document.getElementsByClassName('ml-auto key-input');
    let inputs = Array.from(collection);
    inputs.forEach(input => {
      input.addEventListener('keydown', (event) => {
      event.preventDefault();
      });
    })
  }
}
