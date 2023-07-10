

// document.createElement('h1');
// document.createElement('h2');

let pappiLaal = document.createElement('div');
let foolandevi = document.createElement('div');

let arti = document.getElementById('arti');

pappiLaal.innerText = 'pappi chulp';
foolandevi.innerText = 'foolan devi missing sachin baby';

// arti.appendChild(pappiLaal);---only HTML
// arti.appendChild(pappiLaal,foolandevi);--wrong way


//multiple elements
// arti.append(pappiLaal,foolandevi,'dharamwati');


//starting me add karenge..
arti.prepend(pappiLaal,foolandevi,'dharamwati');