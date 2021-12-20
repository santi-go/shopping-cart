import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('beverage', params.item_id);
  }
}
