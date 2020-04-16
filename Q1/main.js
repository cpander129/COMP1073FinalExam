// JavaScript Document

//Error 5 querySelector not querySelectorAll
let main = document.querySelector('main');
//Changed to mirror type change in html
let submitButton = document.querySelector('input[type="button"]');
//Error 3 no variable to store input box
let input = document.querySelector('input[type="text"]');
//Error 1 document is misspelled
let body = document.querySelector('body');
//Error 2 addEventListener needs click not clickityclick
submitButton.addEventListener('click', function (e) {
    let personName = input.value;
    let para = document.createElement('p');
    para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
    //Error 4 misnamed parameter
    main.appendChild(para);
    body.setAttribute('class', 'meow');
    console.log('=^..^=');
});
