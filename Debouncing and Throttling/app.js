// !Agenda
/**
 * *setTimeout()
 * *clearTimeout()
 * *Debouncing 
 * *Throttling 
 * 
 */

/**
 * !setTimeout() : 
 * !            Every setTimeout() will return the unique id 
 * 
 * *usecase : that unique id will be used to kill that timeout means its call back will not get executed after some duration also 
 * 
 * Example : 
 * 
            * !Understanding the timers in detail 

            let printFullName = () => {
                console.log("Hi I am Manoj");
            }


            const id1 = setTimeout(() => {
                printFullName();
            } , 3000);


            const id2 = setTimeout(() => {
                printFullName();
            } , 5000);

            console.log(id1);
            console.log(id2);


            // !now I will use the clearTimeout 

            clearTimeout(id1);  //*setTimeout() having the id1 will be killed it will be not executed 
 * 
 */




//!concept the debouncing and Throttling             



const inputNormal = document.querySelector(".normal");

const inputDebouncing = document.querySelector(".debouncing");

const inputThrottling = document.querySelector(".throttling");


const getItemsRecommensdationsNormal = () => {
    let userEnteredText = inputNormal.value;

    console.log("Searched Text is " + userEnteredText);
}


const getItemsRecommensdationsDebouncing = () => {
    let userEnteredText = inputDebouncing.value;

    console.log("Debouncing Searched Text is " + userEnteredText);
}


const getItemsRecommensdationsThrottling = () => {
    let userEnteredText = inputThrottling.value;

    console.log("Throttling Searched Text is " + userEnteredText);
}






    // ^for each character we will make the API call from the backend to get the recommended product names with that characters which user is entering in the search-box 
    // so I have to do the some optimization because each API call will take some time to reply 


// !now lets see using the debouncing : means the when the my keyboard is inactive means I can assume that user stoped entering the text and I will make the API call 



// ^lets see how to implement the debouncing 

    // Debouncing
    const debounce = (fn, delay) => {
        let timerId
        const debounceSearch = () => {
            clearTimeout(timerId)
            timerId = setTimeout(() => {
                fn()     //*make the api call  
            }, delay)
        }
        return debounceSearch
    }



//^ how to implement the Throttling 

    // Throttling
    const throttle = (fn, delay) => {
        let flag = true

        const throttleSearch = () => {
            if (flag) {                      //!because of the closure I am able to access here  
                fn()  //*make the api call 
                flag = false

                setTimeout(() => {
                    // fn()
                    flag = true
                }, delay);
            }
        }

        return throttleSearch
    }






const autocompleteNormal = getItemsRecommensdationsNormal;

const autocompleteDebounce = debounce(getItemsRecommensdationsDebouncing , 3000);   //*debounce will execute the passed function after the 3 seconds delay 

const autocompleteThrottling = throttle(getItemsRecommensdationsThrottling , 3000); 

 
// debounce function will take the two things as the input parameter 
//      *1) Action that need to be taken in the function format 
//      *2)and second is time dealy after how many seconds that 1st action should get executed 

// !now adding the event listners 

inputNormal.addEventListener("input" , autocompleteNormal );

inputDebouncing.addEventListener("keyup" , autocompleteDebounce);


inputThrottling.addEventListener("keyup" , autocompleteThrottling);

//! usecase of throtlling is for the instagram feed section 
// !usecase of debouncing is for search bar recommend the products to user while user type the name of the product used in E-Commerce


// learned some optimization techniques to make the api calls efficientlly using the debounding means once the keyboard became inactive then make the api call and throttling means for the fixed duration we will make the api call 