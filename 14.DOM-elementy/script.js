// Zadanie1
function getTagNames(els) {
    const elsArr = Array.from(els);
    return elsArr.map((el) => el.tagName);
}

console.log(getTagNames(document.getElementsByClassName('more-divs')));

// Zadanie2
function getCode(el) {
    
    console.log(el.outerHTML)
    
    console.log(el.innerHTML);
    
    console.log(el.className);
    
    console.log(el.classList);
    
    console.log(el.dataset);
}


getCode(document.getElementsByClassName('short-list')[0]);

// Zadanie3
function calcAttributes(el) {
    let numbers = Object.values(el.dataset).filter(v => Number(v));
    numbers = numbers.map(v => Number(v));
    console.log(numbers);
    return {
        add: numbers.reduce((a, b) => a + b),
      substract: numbers.reduce((a, b) => a - b)
    };
}

console.log(calcAttributes(document.getElementById('datasetCheck')));

// Zadanie4
document.getElementById('spanText').innerText = 'dowolny';

// Zadanie5
document.getElementById('spanText').className = 'dowolna';

// Zadanie6
function printClassesAndRemove(classes) {
    classes.forEach(v => console.log(v));
    console.log([...classes].join('+'));
      document.getElementsByClassName(classes.value)[0].classList = [];

    console.log('Usunięto wszytskie klasy');
}

printClassesAndRemove(document.getElementById('classes').classList);

// Zadanie7
function addAttr(els) {
    const filtered = [...els].filter(el => !el.getAttribute('data-text'));
    filtered.forEach((el) => {
      el.setAttribute('data-text', 'text');
    })
  }
  
  addAttr(document.getElementById('longList').getElementsByTagName('li'));
  
// Zadanie8
function saveStringToObj(string) {
  const obj = {
    newClass: string
  }
  return obj;
}

function addNewClassToDiv(obj) {
  const newClass = obj.newClass;
  document.getElementById('myDiv').classList.add(newClass);
}

addNewClassToDiv(saveStringToObj('string_z_parametru'));

// Zadanie9
function addEvenOddClass(number) {
  const newClass = number % 2 === 0 
    ? 'even'
    : 'odd';
  console.log(number, newClass);
  document.getElementById('numbers').classList.add(newClass);
}

addEvenOddClass(Math.floor(Math.random() * 11));

// Zadanie10
function getValues(el) {
  return [...el.children].map(v => v.innerText);
}

console.log(getValues(document.getElementById('longList')));

// Zadanie11
function changeValues(el) {
  [...el.children].forEach(v => {
    v.setAttribute('old-value', v.innerText);
    v.innerText = Math.floor(Math.random() * 11);
  });
}

changeValues(document.getElementById('longList'));
