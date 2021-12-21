import Service from '@ember/service';

let greenTeaCount = 0;
let strawberriesCount = 0;
let coffeeCount = 0;
    
export default class OffersService extends Service {
  
  getOffer(item) {
    if(item.id == 'GR1') {
      return this.greenTeaOffer(item);
    }

    if(item.id == 'SR1') {
      return this.strawberriesOffer(item);
    }

    if(item.id == 'CF1') {
      return this.coffeeOffer(item);
    }
  }

  coffeeOffer(item) {
    if (coffeeCount < item.count) {
      return this.addCoffeeDiscount(item);
    } else {
      return this.substractCoffeeDiscount(item);
    } 
  }

  addCoffeeDiscount(item) {
    coffeeCount = item.count;
    if(item.count == 3) {
      return this.caculateCoffeDiscount(item) * 3;
    } else if (item.count > 3) {
      return this.caculateCoffeDiscount(item);
    } else {
      return 0;
    }  
  }

  substractCoffeeDiscount(item) {
    coffeeCount = item.count;
    if(item.count == 2) {
      return - this.caculateCoffeDiscount(item) * 3;
    } else if (item.count >= 3) {
      return - this.caculateCoffeDiscount(item);
    } else {
      return 0;
    }   
  }

  caculateCoffeDiscount(item) {
    return (item.price / 3) * 2;
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
    if (item.count >= 3) {
      return 0.50
    } else {
      return 0;
    }  
  }

  substractStrawberriesDiscount(item) {
    strawberriesCount = item.count;
    if (item.count > 1) {
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
