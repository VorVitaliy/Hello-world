"use strict";

//Первое задание;

var selector = document.querySelector("#item_1").innerHTML;
var id = document.getElementById('item_1').innerHTML;
var children = document.body.children[0].children[0].innerHTML;

console.log("First element 'li', selector:", selector);
console.log("First element 'li', id:", id);
console.log("First element 'li', children:", children);


//Второе задание;






// Четвертое задание

function decTobin(dec) {
    return (dec >>> 0).toString(2);
}

function binTodec(bin) {
    return parseInt(bin, 2);
}
console.log("Перевод из десятичного числа, в двоичное:", decTobin(154));
console.log("Перевод из двоичного числа, в десятичное:", binTodec('101111'));