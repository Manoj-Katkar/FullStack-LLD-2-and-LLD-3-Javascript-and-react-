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

//* let allClassForHtmlElement = element.classList()



// !now to add the extracted attribute to the targeted html element as the class Name 

// *element.classList.add(className-which-extracted-fromAttribute);


// !to get the which element is triggred in the DOM for that event with its parent 

// * use event.target;


// !to get the className of the triggred HTML element in DOM 

// *use element.className;    //*it is property 


// !to set the background image for the particular div (use the url in the bactics then give the path in string format )

// * element.style.background = 'url("https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/055/850/original/jail.jpg?1699030242")';




// !to prevent the page to getting refreshed within the event is getting submit and I want it should prevent its default behaviour

event.preventDefault();

