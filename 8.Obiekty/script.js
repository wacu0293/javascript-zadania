// Zadanie1
const car = {
    color: 'red',
    wheels: 4,
    model: 'Mercedes'
}

for (const [key] of Object.entries(car)) {
    console.log(car[key]);
}

// Zadanie2
const car = {
    color: 'red',
    wheels: 4,
    name: 'Mercedes',
    changeName: function (newName) {
        this.name = newName;
    }
}

car.changeName('Porshe');
console.log(car);

// Zadanie3
function sumObject(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumObj = new sumObject([1, 2, 3, 4]);

console.log(sumObj.sum);

// Zadanie4
const car = {
    model: 'BMW',
    age: 12,
    color: 'Black'
}

for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// Zadanie5
const car = {
    model: 'BMW',
    age: 12,
    color: 'Black',
    owner: {
      name: 'Mirek',
      age: 33
    }
}

for (const [key, value] of Object.entries(car.owner)) {
    console.log(`${key}: ${value}`);
}

// Zadanie6
const car = {
    model: 'BMW',
    age: 12,
    color: 'Black',
    owner: {
      name: 'Mirek',
      age: 33
    }
}

car.engine = 1.2;
car.honk = () => {
  console.log('hello');
}
car.honk();
