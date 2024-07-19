// !All about the local And the Session Storage 

let arr1 = [ 10 , 20 , 30 , 40 , 50];

localStorage.setItem("Array 1" , arr1);   //here the array got added in quama seperated elements 

let arrayInStringOriginalFormat = JSON.stringify(arr1);

localStorage.setItem("Array Original Format" , arrayInStringOriginalFormat);

let arrayInString  = localStorage.getItem("Array Original Format");

console.log(arrayInString , typeof arrayInString);

let arrayInJsFormat = JSON.parse(arrayInString);

console.log(arrayInJsFormat , typeof arrayInJsFormat);

//!to remove 

localStorage.removeItem("Array 1");

//!to remove the all the data at once 

localStorage.clear();





