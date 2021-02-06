  // Zadanie1
    
      // .1.
      document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
      // .2.
      document.addEventListener('mousemove', (event) => console.log(event));
      // .3.
      document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
      // .4.
      document.addEventListener('keypress', (event) => console.log(event));
      // .5.
      document.addEventListener('scroll', (event) => console.log(event));
      // .6.
      document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));
  
  // Zadanie2
  
      document.querySelector('#ex2').addEventListener("click", function(){
        var a = document.querySelector('#ex2');
        var attrib = a.dataset.text;
        var txt = document.querySelector('#span-ex2')
        txt.innerHTML = attrib;
    });
    
  // Zadanie3
  
  function switchColor() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

switchColor();

    // Zadanie4
    
    function checkInputText(target) {
        var chars = /^[a-zA-Z]+$/;

        return chars.test(target.value);
    }
    document.querySelector('#input-test').addEventListener('change', (event) => {
        var isItOk = checkInputText(event.target);
        var itWasntOk = document.querySelector('#ex3-err');

        if (isItOk == false) {
            itWasntOk.innerText = "Nie możesz wpisywać cyfr!";
            return;
        }
        itWasntOk.innerText = "";
    });
    
    // Zadanie5
  
  function countMyClicks() {
    const button = document.getElementById('ex5-button');
    var a = 0;
    button.addEventListener('click', counter);
    
    function counter() {
        ++a;
        button.nextElementSibling.innerText = a;

        if (a === 10) button.removeEventListener('click', counter);

    }
}

countMyClicks();
  
  // Zadanie6
  
  function redOrWhiteColor() {
    document.addEventListener('scroll', (event) => {
        var whereAmI = window.scrollY;
        var body = document.querySelector('body');

        if (whereAmI > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}

redOrWhiteColor();
  
  // Zadanie7

  
   var ourInput = document.querySelector('#calculator > input');
    var clearFlag = false;
    var another = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (clearFlag == true) {
                ourInput.value = "";
                clearFlag = false;
            }
            ourInput.value = ourInput.value + event.target.innerText;
            if (another == true) {
                ourInput.value = eval(ourInput.value);
                another = false;
                clearFlag = true;
            }
            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                another = true;
            }
        });
    });
