// Zadanie1

let num1 = 12;
let num2 = 5;

if (num1 > num2) {
    console.log(`num1 (${num1}) jest większa`);
} else {
    console.log(`num2 (${num2}) jest większa`);
}

// Zadanie2

let num3 = 12;
let num4 = 15;
let num5 = 20;

if (num3 > num4 && num3 > num5) {
    console.log(`num3 (${num3}) jest największa`);
} else if (num4 > num5) {
    console.log(`num4 (${num4}) jest największa`);
} else {
    console.log(`num5 (${num5}) jest największa`);
}

// Zadanie3

for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// Zadanie4
let result = 0;
for (let j = 1; j < 11; j++) {
    result += j;
}

// Zadanie5
var n = 5;
for (let k = 0; k <= n; k++) {
    console.log(`${k} - ${k % 2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}

// Zadanie6
for (let l = 0; l < 3; l++) {
    for (let m = 0; m < 3; m++) {
        console.log("i= " + l + ", j= " + m);
    }
}

// Zadanie7
for (let n = 0; n <= 100; n++) {
    isMod3 = n % 3 === 0 ? 'Fizz' : '';
    isMod5 = n % 5 === 0 ? 'Buzz' : '';

    const result = isMod3 + isMod5;
    console.log(result || n);
}

// Zadanie8
// zmienne dla wszystkich podpunktów
// a
let stars = '*';
let spacer = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += stars;
    }
    console.log(result);
}

// b
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    console.log(result);
}

// c
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}

// d
let stars = '*';
let spacer = ' ';
for (var f = 0; f < 11; f++) {
    var result = '';
    for (var g = 0; g < 5; g++) {
        if (f < 5) {
            result += g <= f ? stars : g;
        } else if (f > 5) {
            result = (g < f-6 ? (g-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

// e
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    if(c>=5) {
        result = '';
        for (var f = 0; f < 4; f++) {
          result += spacer;
        }
        result += stars;
    }
  
    console.log(result);
}
