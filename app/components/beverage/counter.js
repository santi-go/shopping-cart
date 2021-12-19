import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BeverageCounterComponent extends Component {
  @tracked equalsZero = true;
  @tracked count = 0;

  @action
  change(amount) {
    this.count = this.count + amount;
    this.count == 0 ?  this.equalsZero = true : this.equalsZero = false
    this.args.updateQuantity(this.count);
  }
}
