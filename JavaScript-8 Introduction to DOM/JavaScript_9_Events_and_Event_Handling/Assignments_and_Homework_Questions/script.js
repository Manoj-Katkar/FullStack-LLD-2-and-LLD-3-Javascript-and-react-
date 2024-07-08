


// so here I have to implement this keyboard event on the body 
// because all the content that I have to go through it is present in the body 

// step 1 target the html tags 

let bodyOfHtml = document.querySelector("body");

// also target the all the sections h2

let section1 = document.querySelector("#s1");
let section2 = document.querySelector("#s2");
let section3 = document.querySelector("#s3");

console.log(section1);
console.log(section2);
console.log(section3);


// I have to implement the keypress event of the keyboard 
/** 
**Keyboard events in JavaScript are events that are triggered when the user interacts with the keyboard. There are three main types of keyboard events:

*^keydown: This event is triggered when a key is pressed down.
*^keypress: This event is triggered when a key is pressed down and then released. It is generally used for capturing character input.
*^keyup: This event is triggered when a key is released.
*/



bodyOfHtml.addEventListener("keypress" , (event) => {
    // to get the which key is got pressed use .key property 
    // console.log(typeof event.key);  //string

    const keyPressed = event.key;

    if(keyPressed == "1"){

        section1.scrollIntoView();
    }
    else if(keyPressed == "2"){

        section2.scrollIntoView();
    }
    else if(keyPressed == "3"){
        section3.scrollIntoView();
    }

    // !now for tha top and bottom I have to target the HTML 
        const html = document.querySelector('html')
        console.log(html.getBoundingClientRect())

    if(keyPressed == "t"){
        // *then I have to show the top 
        // !there is function in window object that I have to use 

        window.scrollBy(0, -html.getBoundingClientRect().height);   //-negative for the top 

       
    }
    else if(keyPressed == "b"){
        // *then I have to show the bottom
        // !there is function in window object that I have to use 

        window.scrollBy(0, +html.getBoundingClientRect().height);   //+positive for the bottom 

    }

})


