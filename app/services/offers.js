import Service from '@ember/service';

export default class OffersService extends Service {
  
  getOffer(items) {
    items.forEach((item)=> {
      console.log(item)
    })
  }
  
  greenTeaOffer(item) {
    return item.price;
    // if(item.count != 0 && item.count % 2 == 0) {
      
    // }
  }
}
