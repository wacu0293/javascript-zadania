// Zadanie 1
    const el = document.createElement("div");
    el.innerText = "To jest nowy element";
    document.body.appendChild(el);
  
 // Zadanie2
  
  const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
  const myList = document.createElement('ol');
  myList.id = 'myList';

myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElem.append(myList);
document.body.insertBefore(newElem, document.getElementById('root'));  
  
  // Zadanie3
  
  newElem.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if (x % 2 === 1) {
            myList.removeChild(el);
        }
    });
});
  // Zadanie 4
    
    const button = document.createElement('button');
    button.innerText = 'Click to remove';
    button.addEventListener('click', (e) => {
    e.target.remove();
  
  // Zadanie5
  
  var random = Math.round(Math.random() * 10);

  for (var a = 0; a < random; a++) {
      var someDiv = document.createElement('div');

      someDiv.innerHTML = `to jest div numer ${a}`;
      exe.appendChild(someDiv);
  }
  
    // Zadanie6
  
  const myNewObjStr = { 
    div1: 'to jest div1', 
    span1: 'to jest span1', 
    div2: { 
      div3: 'to jest div3(2)', 
    }, 
    span2: 'to jest span2', 
    /* dopisałem sobie cyferki, 
    żeby mi się nie mieszało */
  }

  const r00t = document.getElementById('root');
  
  const firstDiv = document.createElement('div');
firstDiv.innerText = myNewObjStr.div1;

const firstSpan = document.createElement('span');
firstSpan.innerText = myNewObjStr.span1;

firstDiv.append(firstSpan);

document.body.append(firstDiv, r00t);

const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
thirdDiv.innerText = myNewObjStr.div2.div3;

const secondSpan = document.createElement('span');
secondSpan.innerText = myNewObjStr.span2;

secondDiv.append(thirdDiv);
secondDiv.append(secondSpan);

document.body.append(secondDiv, r00t);
  
  // Zadanie 7
const favFruits = ['pomidor', 'gruszka', 'mango', 'banan', 'borówki', 'pomarańcza', 'awokado'];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul1.appendChild(li);
});

const lists = [ul1, ul2];
const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
    lists.forEach((ul, i) => {
        if (ul.childElementCount <= 1) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

lists.forEach((ul, i) => {
    buttons[i].innerText = 'MOVE';
    buttons[i].addEventListener('click', () => {
        const listItems = ul.querySelectorAll('li');
        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();

  
  // Zadanie8

  var newFormulage = document.createElement("form");
  root.appendChild(newFormulage);
  var whatIsIt = document.createElement("input");
  whatIsIt.setAttribute('type', 'text');
  whatIsIt.setAttribute('value', 'HowItIsCalled');
  var someThing = document.createElement("input");
  someThing.setAttribute('type', 'text');
  someThing.setAttribute('value', 'SomethingToWrite');
  var chooseItsColor = document.createElement("input");
  chooseItsColor.setAttribute('type', 'text');
  chooseItsColor.setAttribute('value', 'WhatColorDoYouWant');
  var howManyTimes = document.createElement("input");
  howManyTimes.setAttribute('type', 'text');
  howManyTimes.setAttribute('value', 'quantity');

  newFormulage.appendChild(whatIsIt);
  newFormulage.appendChild(someThing);
  newFormulage.appendChild(chooseItsColor);
  newFormulage.appendChild(howManyTimes);

  var dontDOit = document.createElement('button');
  dontDOit.id = "abc"
  dontDOit.type = 'button'
  dontDOit.innerText = "DONE!";
  newFormulage.appendChild(dontDOit);

  function coolFun(){
    for(var i = 0; i < howManyTimes.value; i++){
      var added = document.createElement(whatIsIt.value);
      added.innerText = someThing.value;
      added.style.color = chooseItsColor.value;
      root.appendChild(added);
    }
  }
  document.querySelector('#abc').addEventListener('click', coolFun );
  
    // Zadanie9

  var nextFormulage = document.createElement("form");
  root.appendChild(nextFormulage);
  var yourName = document.createElement("input");
  yourName.setAttribute('type', 'text');
  yourName.setAttribute('value', 'Name');
  var lastname = document.createElement("input");
  lastname.setAttribute('type', 'text');
  lastname.setAttribute('value', 'Lastname');
  var age = document.createElement("input");
  age.setAttribute('type', 'text');
  age.setAttribute('value', 'Age');
  var howManyKids = document.createElement("input");
  howManyKids.setAttribute('type', 'text');
  howManyKids.setAttribute('value', 'HowManyKids');

  nextFormulage.appendChild(yourName);
  nextFormulage.appendChild(lastname);
  nextFormulage.appendChild(age);
  nextFormulage.appendChild(howManyKids);

  var moreButton = document.createElement('button');
  moreButton.id = "more"
  moreButton.type = 'button'
  moreButton.innerText = "Więcej";
  nextFormulage.appendChild(moreButton);

  var createButton = document.createElement('button');
  createButton.id = "create"
  createButton.type = 'button'
  createButton.innerText = "Utwórz";
  nextFormulage.appendChild(createButton);

  var nameTab = [];
  var lastnameTab = [];
  var ageTab = [];
  var kidsTab = [];

  function moreFields(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';

  }
  document.querySelector('#more').addEventListener('click', moreFields);

  function createTable(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';


    var tab = document.createElement("table");
    
    var header = document.createElement('tr');
    tab.appendChild(header);
    var name = document.createElement('th');
    name.innerHTML = "Name";
    var lastName = document.createElement('th');
    lastName.innerHTML = "Lastname";
    var age1 = document.createElement('th');
    age1.innerHTML = "Age";
    var kids = document.createElement('th');
    kids.innerHTML = "HowManyKids";
    
    root.appendChild(tab);
    header.appendChild(name);
    header.appendChild(lastName);
    header.appendChild(age1);
    header.appendChild(kids);
    
    for (var i = 0; i < nameTab.length; i++) {
      var item = document.createElement('tr');
      tab.appendChild(item);
      var del = document.createElement('button');
      del.innerText = "Usuń";
      item.appendChild(del);

      var newName = document.createElement('td');
      newName.innerText = nameTab[i];
      var newLastname = document.createElement('td');
      newLastname.innerText = lastnameTab[i];
      var newAge = document.createElement('td');
      newAge.innerText = ageTab[i];
      var newKids = document.createElement('td');
      newKids.innerText= kidsTab[i];   

      
      item.appendChild(newName);
      item.appendChild(newLastname);
      item.appendChild(newAge);
      item.appendChild(newKids);
      item.appendChild(del);

      del.addEventListener('click', deleteA);
    
    }
    nameTab = [];
    lastnameTab = [];
    ageTab = [];
    kidsTab = [];
  }

  function deleteA(e) {
    
    e.target  .parentElement.remove()
  }

  document.querySelector('#create').addEventListener('click', createTable);
  
    // Zadanie10

  let changeButton = document.createElement('button');
  changeButton.id = "change"
  changeButton.type = 'button'
  changeButton.innerText = "Użyj dużych liter!";
  root.appendChild(changeButton);  

  function changeLetters() {
    document.querySelectorAll('tr').forEach((row) => {
      row.querySelectorAll('td').forEach((cell) => {
        cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
      })
    })
  }  

  document.querySelector('#change').addEventListener('click', changeLetters);
  
  // Zadanie11

var numbersInTxtBtn = document.createElement('button');
numbersInTxtBtn.innerText = 'Check';
var numbersInTxt = document.createElement('input');
numbersInTxt.type = 'text';

const rut = document.getElementById('root');

function numbers(a) {
    if (!/\d/.test(a)) {
        return 'There are no numbers';
    }

    var xxx = a.replace(/[^0-9]/g, ' ').split(' ');

    var sum = 0;
    var notSum = 1;

    xxx.forEach((i) => {
        if (!i.length) {
            return;
        }

        i = parseInt(i);

        sum += i;
        notSum *= i;
      
      console.log(sum);
    });

    for (var i = 0; i < notSum; ++i) {
        var div = document.createElement('div');
        div.innerText = a;

        document.body.append(div, rut);
    }

    return sum;
}

numbersInTxtBtn.addEventListener('click', () => {
    console.log(numbers(numbersInTxt.value));
});

document.body.append(numbersInTxt, rut);
document.body.append(numbersInTxtBtn, rut);
  
// Zadanie 12
function createObj(str) {
    return {
        string: str
    }
}

const alaStr = createObj('Ala ma kota');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

alaStr.alaToOla();
  
  // Zadanie13
  
  function countForMe(stringArr){  
  var howManyLetters = [];
    for(var i = 0; i < stringArr.length; i++){
      howManyLetters[i] = stringArr[i].length;
    }     
     return howManyLetters;
  }

  function showAvg(summ){
    var average = summ / tabWithWords.length;
    return average;
  }

  function sum(howManyLetters){
    var summ = howManyLetters.reduce((prev,curr) => prev += curr);
    return summ;
  }
  

 var tabWithWords = ['Mornings','are','for','coffee','and', 'contemplation', 'StrangerThings'];
  console.log("Letters in each word:");
  console.log(countForMe(tabWithWords));
  console.log("Sum of letters:");
  console.log(sum(countForMe(tabWithWords)));
  console.log("Average:");
  console.log(showAvg(sum(countForMe(tabWithWords))));
  
  // Zadanie14
  
  function obj() {
    return {
        name: '',
        surname: '',
        age: '',
    };
}

var itIsMe = obj();

// const rut = document.getElementById('root');
//^ również podebrane z zadań wyżej

function myData(name, surname, age) {
    itIsMe.name = name;
    itIsMe.surname = surname;
    itIsMe.age = age;
//------------------------------------
    itIsMe.nameChars = name.length;
    itIsMe.surnameChars = surname.length;
    itIsMe.ageChars = age.length;

    if (itIsMe.nameChars > 5 || itIsMe.surnameChars > 5 || itIsMe.ageChars > 5) {
        var newButton = document.createElement('button');
        newButton.innerText = 'Przywróć obiekt do stanu początkowego';
        document.body.append(newButton, rut );

        newButton.addEventListener('click', () => {
            itIsMe = obj();

            console.log(itIsMe);
        })
    }

    console.log(itIsMe);
}

myData('Waclaw', 'Wojcik', '22');
