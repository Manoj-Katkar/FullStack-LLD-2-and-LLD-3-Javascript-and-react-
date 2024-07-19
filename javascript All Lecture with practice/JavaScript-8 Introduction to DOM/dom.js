// !Agenda 

/**
 * *DOM(Document Object Model)
 * *Selecting elements in DOM 
 * *Events and Events Listners 
 * *creating and inserting elements 
 * *some methods like getAttribute() and setAttribute()
 */

// DOM : it is a tree like structure where every html element is the Node 
// Document : means the complete tree is known as the Document 

// ! Note : All HTML elements are objects in the DOM 




// !How to select th elements in the dom 

//* to select the element using the id 

//^ const btn1 = document.getElementById('pass-id');

//* to select the element using the className   (it will return the HTML Collection)

// ^ const btn2 = document.getElementsByClassName('pass-id');  


//* to select the element using the id,calssName,or using the elementName  

//^ const btn = document.querySelector('#pass-id');
//^ const btn = document.querySelector('.pass-className');
//^ const btn = document.querySelector('elementName');



//* to select the ALL element using the id,calssName,or using the elementName  

//^  const btn = document.querySelectorAll('#pass-id');
//^ const btn = document.querySelectorAll('.pass-className');
//^ const btn = document.querySelectorAll('elementName'); 

// !Now lets learn the How to add the Events to the targetted HTML element 


// !What is Event : it is the Any activity that user performs on the website 
// *then for each event I have to told to the javascript that what to do when event occureed 

// & using the addEventListener() we can tell to the javascript that what to do for the particular event 

// targetedHTMLElement.addEventListener('type-of-event' , callback function what to do for that that 
// !particular even define here with one argument (event) that will hold the all he details regarding that event  )

// !Syntax :
/**
 * *            targetedHTMLElement.addEventListener('type-of-event', (event) => {
                //here event is the object that will have the all the information about the that particular event 
                //*define the lofic when event is occured what to do and what not to 

 **           }
 */

// !How to create the elements in the DOM 
// using the below method 

//* const div1 = document.createElement('div');

// console.log(div1);

// !now how to add the message inside the created HTML element in the DOM using the innerText property 

// *div1.innerText = "Hello";

// console.log(div1);

// !NOw I have to insert this above inside the body use querySelector
// so Now I have to select the body first 

//* const htmlBody = document.querySelector('body');

// console.log(htmlBody);

// !now add the div inside the htmpBody using the appendChild() method

//* htmlBody.appendChild(div1);

// !to remove any element in dom 
// *element.remove();


// !now if I need to append html element after the particular position or before some position then I have to use the below syntax 

// ^ if here is ul insid ethat li for particular position I have to insert then use the following 

/**
 * *first from the node list of the querySelectorAll get the position before we have to insert that particular html element using index 
 * 
 * ^ then use parent that is ul.insertBefore(element , and InsertBefore element from the Nodelist )
 */


// ? very important in the nodeList target property heps for which the particular html element the event is occured so we get the idea for which the html element I need to take the action if I will have the same set of the html elements in the my nodeList 


// !to extract the value of the any attribute there is one function 
//* .getAttribute('name-of-attribute')


// !to set the any attribute value to the differant then use below 
// *element.setAttribute("name of attribute" , "and its new value");

// !to get the classList of the targetted html element 

//* let allClassForHtmlElement = element.classList;



// !now to add the extracted attribute to the targeted html element as the class Name 

// *element.classList.add(className-which-extracted-fromAttribute);

// !to remove the any class from the classList of that element 

//*  singleDiv.classList.remove("class Name that to remove");



// !to check in the particular classList of the element contains some class Name 
// ^return type is boolean true if it contains or false if it does not contains 
// *event.target.classList.contains("reply");    





// !to check the two or more level up that element is having particular classsName or not use most to search the accurate parent 
// ^it will always go up in the hierarchy 

//* const closestCard = event.target.closest(".classNameOfElement-WeAre-searching-of any parent");



// !to get the which element is triggred in the DOM for that event with its parent 

// * use event.target;


// !to get the className of the triggred HTML element in DOM 

// *use element.className;    //*it is property 


// !to set the background image for the particular div (use the url in the bactics then give the path in string format )

// * element.style.background = 'url("https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/055/850/original/jail.jpg?1699030242")';




// !to prevent the page to getting refreshed within the event is getting submit and I want it should prevent its default behaviour

event.preventDefault();


// !to remove the any child individually 

// div2.removeChild(anchorTag);


//! to entirelly remove the div2 

// div2.remove();

// !Libraries
// if we are comming accross the problem while doing the project that what to do for certain design of the code logic so look out for the third party libraries 
// ^so npm  (Node Pacakage Manager) is one out of them

// !but there are static libraries are also there like cdn =(Content Delivery Network.)  where some static assest is hosted that can be the image , vedio or text or some javascript files or css also

// ^so to create the unique id I will use cdn that is below
{/* <script src="https://unpkg.com/shortid-dist@1.0.5/dist/shortid-2.2.13.min.js"></script> */}


// ! to access the child of the any element 

// ^parentElementName.children[pass the index starting from 0]

// !to get the any child parent 

// ^childElementName.parentElement;



// !Local Storage (5mb data for the each host we can save) (it is persistent data). and (every url will have the differant local storage)
// !Session Storage : it will get clear automatically when the that tab will get closed it is temporaray basis 
// all mesthoda are same only 


localStorage.setItem(key , value);  //*key and value should be on the string format     

localStorage.getItem(key)

localStorage.removeItem(key)

localStorage.clear() ;  //*removes the all the pairs at once 






// !Event Delegation and Event Propagation All Notes 




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
 * *                                        Apply the addEventListner to the element in bubling phase who is least common Ancestor for the both the elements that we are optimizing to add the event Listner 
 * 
 * 
 * 
//^ to get original target = event.target (means the element where I have to go that is going to be the fixed )

// ^ to get the current target  = event.currentTarget;

*/

// const fs = require('fs')
/**
 * *here the fs is the library of the node js and it has the functions to deal with files on a system
 * *it have the functions to deal with files means read the file , delete he file . to update a file 
 * *so first we have to import the files of that library 
 * *hence in require("fs") you have to write fs but for variable name you can take any name for that 
 */
