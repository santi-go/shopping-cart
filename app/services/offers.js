import Service from '@ember/service';

let currentCount = 0;
    
export default class OffersService extends Service {
  
  getOffer(item) {
    if(item.id == 'GR1') {
      return this.greenTeaOffer(item)
    }
  }
  
  greenTeaOffer(item) {
    if(currentCount < item.count) {
      currentCount = item.count;
      if(item.count != 0 && item.count % 2 == 0) {
        return parseFloat(item.price);
      } else {
        return 0;
      }
    } else {
      currentCount = item.count;
      if(item.count != 0 && item.count % 2 != 0) {
        return - parseFloat(item.price);
      } else {
        return 0;
      }
    }
  }
}
