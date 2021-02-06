// Zadanie1

var counter = 1;

function write() {
  console.log("Cześć po raz " + counter);
  counter++;
  if (counter > 15) {
    clearInterval(int);
  }
}
var int = setInterval(write, 3000); 

// Zadanie2

const tab = [1, 2, 3, 4];
var counter = 0;
var place = 0;
setTimeout(console.log(tab), 2000);
function write() {
  console.log(tab[place]);
  counter++;
  place++;
  if (counter > tab.length - 1) {
    clearInterval(int);
  }
}
var int = setInterval(write, 3000); 
