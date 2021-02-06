// Zadanie1
class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  const person1 = new Person('Jacek', 'Sowicki', 17, 'Polska', 'Warszawa');
  const person2 = new Person('Vito', 'Scalleti', 37, 'Włochy', 'Rzym');
  
  person1.printInfo();
  person1.addYearToAge();
  person1.printInfo();
  
  // Zadanie2
  class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  const person1 = new Person('Jacek', 'Sowicki', 17, 'Polska', 'Warszawa');
  const person2 = new Person('Vito', 'Scalleti', 37, 'Włochy', 'Rzym');
  
  person1.favDishes = ['Spaghetti', 'Aglio olio', 'Budda bowl', 'Czwartkowe owoce'];
  person2.favDishes = ['Maca', 'Olej rzepakowy', 'Bazylia w sosie bazyliowym'];
  
  function printDishes() {
    console.log(this.favDishes);
  }
  
  function addDish(dish) {
    this.favDishes.push(dish)
  }
  
  person1.printDishes = printDishes;
  person2.printDishes = printDishes;
  person1.addDish = addDish;
  person2.addDish = addDish;
  
  person1.printDishes();
  person2.addDish('Kopytka');
  person2.printDishes();
  
  // Zadanie3
  let calculator = {
    a: 0,
    b: 0,
      add: function(c, d){
          this.a = c;
          this.b = d;
      },
      sum: function(){
          return this.a + this.b;
      },
      difference: function(){
          return this.a - this.b;
      },
      product: function(){
          return this.a * this.b;
      },
      quotient: function(){
          if(this.b != 0){
              return this.a / this.b;
          }
        else
          {
              return "Can't divide by 0";
          }
      }
  }
  
  calculator.add(15,13);
  console.log(calculator.sum());
  console.log(calculator.difference());
  console.log(calculator.product());
  console.log(calculator.quotient());
  
  
  // Zadanie4
  let stairs = {
    yourStair: 0,
    goUp: function() {
        this.yourStair++;
    },
    
    goDown: function() {
        if (this.yourStair <= 0) {
            this.yourStair = 0;
            console.log("You reached the lowest stair!");
            
            return;
        }
        this.yourStair--;
    },

    tellMeMyStair: function() {
        return `Your Stair: ${this.yourStair}`;
    }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();
