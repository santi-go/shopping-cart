import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count = 0;

  constructor(id, name, price, image, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find((cartItem) => {
      return cartItem.id === item.id;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item(item.id, item.name, item.price, item.image, 1),
      ];
    }
  }

  remove(item) {
    const index = this.itemList.indexOf(item);
    const itemList = this.itemList;
    itemList.splice(index, 1);
    this.itemList = itemList;
  }

  removeAll() {
    this.itemList = [];
  }
}
