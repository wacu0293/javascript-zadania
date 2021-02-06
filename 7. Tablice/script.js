// Zadanie1

const tab = [1, 2, 3, 4];
console.log(tab);

// Zadanie2

    const tab2 = [1, 2, "q", 3, 4, 5, "qe", 6, 7, 8, 9, "qew", 0];
  // 1.Pierszy i drugi element
    console.log(tab2[0], tab2[1]); 
  // 2.Ostatni element
    console.log(tab2[tab2.length-1]);
  // 3.Wszystkie elementy
    console.log(tab2);
  // 4.Co drugi element
    for (let x = 1; x < tab2.length - 1; x += 2) {
    console.log(tab2[x]);
    }
  // 5.Wszystkie stringi
    console.log(tab2.filter((value) => typeof value === 'string'));
  // 6.Wszystkie numbery
    console.log(tab2.filter((value) => typeof value === 'number'));

// Zadanie3

const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  // . 1 .
    var sum = 0;
for (var a = 0; a < numbers.length; a++) {
  sum += numbers[a];
}
    console.log(sum);
  // . 2 .
    var diff = 0;
for (var b = 0; b < numbers.length; b++) {
  diff -= numbers[b];
}
    console.log(diff);
  // . 3 .
    console.log(sum/numbers.length);
  // . 4 .
    console.log(tab2.filter(x => x % 2 == 0));
  // . 5 .
    console.log(tab2.filter(x => x % 2 != 0));
  // . 6 .
    let max = Math.max(...numbers);
    console.log(max);
  // . 7 . 
    let min = Math.min(...numbers);
    console.log(min);
  // . 8 .
    numbers.reverse();
    console.log(numbers);

// Zadanie4

    function xxx(tab){
    return tab.reduce((a,b) => (a+b));
}
console.log(xxx([1,2,3,4,5]));

// Zadanie5

function xxx(tab){
    let average = tab.reduce((a, b) => a += b) / tab.length;

    tab.map((a) => console.log(a * average));
}
xxx([1,2,3,4,5]);

// Zadanie6

function aaa(tab){
    let average = (array) => array.reduce((a, b) => a += b) / array.length;
    avg = average(tab);
    let x = tab.filter(x => x % 2 == 0);

   return ( x.reduce((a,b) => a += b) / x.length);
}
console.log(aaa([6,7,8,9,10]));

// Zadanie7

function bbb(tab){
    return (tab.sort((a, b) => a - b));
}
console.log(bbb([11,1,4,44,18]));

// Zadanie8

const tab1 = [11, 22, 33];
const tab2 = [44, 55, 66];
function write(tab1, tab2)
{
  var x = 0;
  const tab3 = [];

  for(var a = x; a <= tab1.length - 1; a++)
  {
    tab3[x] = tab1[x] + tab2[x];
    x++;
  }
    console.log(tab3);
}
write(tab1, tab2);

// Zadanie9

function ccc(a,b){ 
        return a.filter(c => c != b);
}
console.log(ccc([1,2,3,4,5],3));

// Zadanie10

const tab = [-99, -17, 0, 123, 512];
var counter = 0;
function write(tab)
{
  for( var a = counter; a < tab.length; a++)
  {
      tab[a] = (tab[a] - (2*tab[a]));
    var arr = tab;
  }
  console.log(arr);
}
write(tab);
