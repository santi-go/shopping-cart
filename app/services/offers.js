import Service from '@ember/service';

let greenTeaCount = 0;
let strawberriesCount = 0;
    
export default class OffersService extends Service {
  
  getOffer(item) {
    if(item.id == 'GR1') {
      return this.greenTeaOffer(item);
    }

    if(item.id == 'SR1') {
      return this.strawberriesOffer(item);
    }
  }

  strawberriesOffer(item) {
    if (strawberriesCount < item.count) {
      return this.addStrawberriesDiscount(item);
    } else {
      return this.substractStrawberriesDiscount(item);
    }
  }

  addStrawberriesDiscount(item) {
    strawberriesCount = item.count;
    if(item.count == 3) {
      return 1.50;
    } else if (item.count > 3) {
      return 0.50
    } else {
      return 0;
    }  
  }

  substractStrawberriesDiscount(item) {
    strawberriesCount = item.count;
    if(item.count == 2) {
      return - 1.50;
    } else if (item.count >= 3) {
      return - 0.50
    } else {
      return 0;
    }  
  }
  
  greenTeaOffer(item) {
    if(greenTeaCount < item.count) {
      return this.addGreenTeaDiscount(item);
    } else {
      return this.substractGreenTeaDiscount(item);
    }
  }

  addGreenTeaDiscount(item) {
    greenTeaCount = item.count;
    if(this.isCountEven(item)) {
      return parseFloat(item.price);
    } else {
      return 0;
    }
  }

  substractGreenTeaDiscount(item) {
    greenTeaCount = item.count;
    
    if(!this.isCountEven(item)) {
      return - parseFloat(item.price);
    } else {
      return 0;
    }
  }

  isCountEven(item) {
    return item.count % 2 == 0;
  }
}
