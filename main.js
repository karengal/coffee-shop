var coffeeShop = {
  beans: 40,
  money: 100,   

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType])
      alert("Sorry, we don't make "+ drinkType);
    else{
      if((this.beans - this.drinkRequirements[drinkType]) > 0){
        this.beans -= this.drinkRequirements[drinkType];
        alert("Coffee was made");
        }
      else
      alert("Sorry, we're all out of beans!");        
    }      
  }

,
buySupplies: function (amount){
  if (amount > 0){
    this.money -= amount;
    this.beans += (amount / 5);
  }
  else
    alert("Sorry, the amount is not sufficient!");   
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buySupplies(10);
coffeeShop.makeDrink("frenchPress");
coffeeShop.buySupplies(5);
coffeeShop.makeDrink("americano");