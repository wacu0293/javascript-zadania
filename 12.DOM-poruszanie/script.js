// Zadanie1
// 1.1
console.log(document.getElementById('buz').parentElement);

// 1.2
console.log(document.getElementById('buz').parentElement.querySelectorAll('*:not(#buz)'));

// 1.3
console.log(document.getElementById('foo').children);

// 1.4
console.log(document.getElementById('foo').parentElement);

// 1.5
console.log(document.getElementById('foo').children[0]);

// 1.6
const children = document.getElementById('foo').children;
console.log(children[Math.ceil(children.length / 2 - 1)]);

// Zadanie2
function printChildOnClick(el) {
    el.addEventListener('click', () => {
        console.log(el.textContent.trim());
    });
}

printChildOnClick(document.getElementById('ex2'));

// Zadanie3
document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        let sib = el.nextElementSibling;
        console.log(sib);
        sib.style.display = sib.style.display === "none"
            ? "inline"
            : "none"
    });
});

// Zadanie4
document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});

// Zadanie5
// task to numer zadania [1-5]
document.querySelectorAll('div#ex5 div').forEach((el) => {
    const task = 1;
    let selector;
    switch (task) {
        case 1:
            selector = 'li:first-of-type'; break;
        case 2:
            selector = 'li:last-of-type'; break;
        case 3:
            selector = 'li:nth-child(even)'; break;
        case 4:
            selector = 'li'; break;
        case 5:
            selector = '';
    }
    const items = el.parentElement.querySelectorAll(`ul ${selector}`);
    el.addEventListener('mouseover', () => {
        items.forEach((item) => {
            item.style.backgroundColor = el.style.backgroundColor;
        });
    });
});

// Zadanie6
const ex6_1 = document.querySelector('#ex6 > * > * > *');
const ex6_2 = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
// zwraca undefined jeśli nie zostaną usunięte niepożądane na Codepen elementy (html, head)
// działa poprawnie odpalone lokalnie
const ex6_3 = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1]?.firstElementChild?.firstElementChild?.firstElementChild;
console.log({ ex6_1, ex6_2, ex6_3 });
