import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BeverageRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('beverage', params.beverage_id);
  }
}