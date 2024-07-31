// !lets access the all the divisions 

let grandParentDiv = document.querySelector(".grand-parents");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let body = document.querySelector("body");



// console.log(grandParentDiv);
// console.log(parent);
// console.log(child);



// Now I will add the events on all the 3 divs 

let allPhase = true;

// ^capturing phase

body.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    console.log("body is clicked" , event.eventPhase);
} , allPhase)

grandParentDiv.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    // event.stopPropagation()
    console.log("grand parent is clicked" , event.eventPhase);
} , allPhase)

parent.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    console.log("parent is clicked" , event.eventPhase);
}, allPhase)

child.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    console.log("child is clicked" , event.eventPhase);
    // event.stopPropagation()
    
} , allPhase)




// !now if I wanted to capture the both the phases that is capturing and bubbling  

// ^ then I have to call the each event listner two times with capture value one time as false and  one time as true 

// ?upside I have called for the capturing  phase now I will call for the bubbling phase

allPhase = false;

body.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    console.log("body is clicked" , event.eventPhase);
} , allPhase)

grandParentDiv.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    // event.stopPropagation()
    console.log("grand parent is clicked" , event.eventPhase);
} , allPhase)

parent.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    console.log("parent is clicked" , event.eventPhase);
}, allPhase)

child.addEventListener("click" , (event) => {
    let targetNode = event.target;
    // console.log(targetNode);
    console.log("child is clicked" , event.eventPhase);
    // event.stopPropagation()  //*it will terminate the event 
    
} , allPhase)



// !now if I want to see in which phase the event is got triggred each event then use = event.eventPhase

// ^event.eventPhase it will represent by the numbers as 1 , 2 , 3 

/**
 * *1 = capturing phase 
 * *2 = Target phase 
 * *3 = bubbling phase 
 */


//^ to get original target = event.target (means the element where I have to go that is going to be the fixed )
// ^to get the current target  = event.currentTarget;





// !event.target.dataset = 
//* it will create the map of the custom attributes we have for the targetted html element in DomMap format 








// !JavaScript-15: Event Delegation and Machine Coding-2

// 
/**
 * !Event Delegation : 
 * *                the case where the event happen on the one html element but they will not handle themself instead they will delegate means pass on that event to another html element and that element will handle that particular event this concept is known as the event delegation
 * 
 * ^usecase : it is use to make your code efficient 
 * !event delegation is the implementation of the event bubbling 
 * 
 * 
 * !point to remember while implementing the event delegation : 
 * *                                        Apply the addEventListner to the element in bubling phase who is leas common Ancestor for the both the elements that we are optimizing to add the event Listner 

*/

// const fs = require('fs')
/**
 * *here the fs is the library of the node js and it has the functions to deal with files on a system
 * *it have the functions to deal with files means read the file , delete he file . to update a file 
 * *so first we have to import the files of that library 
 * *hence in require("fs") you have to write fs but for variable name you can take any name for that 
 */
