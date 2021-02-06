// Zadanie1

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const personA = new Person('Waclaw', 'Wojcik', 22, 'Poland', 'Piekielnik', 'Polish');
const personB = new Person('Janusz', 'Nowacki', 45, 'Poland', 'Warsaw', 'Polish');
const personC = new Person('Franek', 'Dekiel', 45, 'Poland', 'Zakopane', 'Polish');
const personD = new Person('Maria', 'Frankowa', 67, 'Poland', 'Dzianisz', 'Polish');
const personE = new Person('Jasiek', 'Peronek', 78, 'Poland', 'Sadziki', 'Polish');

personB.newAge(34);
personE.newAge(18);
personA.newCity("Krakow");

console.log(personA);
console.log(personB);
console.log(personE);

// Zadanie2

class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("DON'T DO THAT!!!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}

// Zadanie3

function RandNum() {
	this.changeNumber = () => {
		RandNum.prototype.interval = setInterval(() => {
			RandNum.prototype.num = Math.round(Math.random() * 10);
			console.log(RandNum.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		RandNum.prototype.check = setInterval(() => {
			if (RandNum.prototype.num > 5) {
        console.log("Większa niż 5, koniec");
				clearInterval(RandNum.prototype.interval);
				clearInterval(RandNum.prototype.check);
			}
		}, 1000);
	};
}
const randNumChange = new RandNum();
const randNumCheck = new RandNum();
randNumChange.changeNumber();
randNumCheck.isMoreThan5();
