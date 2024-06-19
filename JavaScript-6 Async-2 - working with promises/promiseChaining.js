//! promise chaning : 
/**
 * *it is the way to do the serial A-sync operations using promises 
 */

let cleanRoom = function(){
    return new Promise((resolve , reject) => {
        resolve ("Cleaned My Room");
    });
};

cleanRoom().then((result) => {  //* here resolve message will be stored in the rresult variable 
    console.log(result);
});

// One more Example for resolving the Promise

let removegarbage = function(){
    return new Promise((resolve , reject) => {
        resolve ("Garbage is Removed From the Room");
    });
};

// now call it so the promise will get resolved 

removegarbage().then((result) => {
    console.log(result);
})


// ! Now I wanted to Execute the Promise In the serialized Fashion for A sync functions
// ! so for that I have to use the promiseChaining 
// ^ In the Below Way I can Gurantty the serialized order for the promises using the Function Chainning 

    cleanRoom()
        .then((result) => {
                console.log(result);

                //^ now I will return the Another function that also returning the one More Promise 
                return removegarbage();    //*I have to catch the resolve in the another then method

        }).then((result) => {

                console.log(result);
        });


// !Question     

 // ?Question Given By Sir 

 let winIceCream = function(){
    //~ return promise and chain it with the clean room and removegarbage  ( Problem Statement given By Sir)
    return new Promise((resolve , reject) => {

        resolve ("IceCream Is ready To Eat");
    });
 };



//~ now I have to chain the winIceCream with the clean room and removegarbage 



cleanRoom()
            .then((result) => {
                
            console.log("--------------------------------- New Chaning For Ice-Cream ----------------------------------");
                    console.log(result);

                    //^ now I will return the Another function that also returning the one More Promise 
                    return removegarbage();    //*I have to catch the resolve in the another then method

            }).then((result) => {
  
                    console.log(result);
                    return winIceCream();

            }).then((result) => {

                console.log(result);

            })


            // !Note :  In above we can handle the errors using the .catch() function with its call-back function



