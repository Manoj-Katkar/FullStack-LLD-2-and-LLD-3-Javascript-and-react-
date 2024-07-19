// ! problem of the coffee Shop from lecture 

// ^ I have to place the order 
// ^ proccess the order 
// ^ and generate the bill
// ! Intentionally doing using the promise chaining 

// ^ to place the order 

const placeOrder = (drink) => {
    // I have to return the promise 
    return new Promise((resolve , reject) => {
        // ? if drink is coffee then only resolve else reject it 
        if(drink == "coffee"){
            resolve ("order for coffee is placed");
        }
        else{
            reject ("order for coffee is not placed");
        }
    });
}

// ^ to process the order 

const processOrder = (orderPlaced) => {

    return new Promise((resolve , reject) => {

        resolve (`${orderPlaced} and served`);
    });
}


// ^ to generate the bill 

const generateBill = (processedOrder) => {

    return new Promise((resolve , reject) => {

        resolve (`${processedOrder} and bill is generated`)
    });
}


// ! Now above functions I have to execute in the serial manner so I will use the function promise  chaining concept over here 



// placeOrder("coffee")
//                     .then((result) => {
//                             console.log(result);

//                             // then here I have to return the another promise 
//                             return processOrder("order is Placed");

//                     }).then((result) => {
//                         console.log(result);

//                         // then here I have to return the another promise 
//                         return generateBill("processed the Order");

//                     }).then((result) => {
//                         console.log(result);

//                         // ! Now I have to write the one catch block also if the my promise will get rejected then what to do for that 

//                     }).catch((error) => {
//                         console.log(error);
//                     })




// ! Now lets convert the above serial promise chaining using the async and await keyword handle it synchronous nature inside the function 


// const serveOrder = async () => {

//     // first for place the order 
//     let orderStatusPromise = await placeOrder("coffee");     //* it will return the promise and I converted it into synchronous 

//     console.log(orderStatusPromise);

//     // second for processing the promise 

//     let processOrderPromise = await processOrder("order is Placed");

//     console.log(processOrderPromise);


//     // third for the generateBill

//     let generateBillPromise = await generateBill("processed the Order");

//     console.log(generateBillPromise);
// }

// ! call the serveOrder function

// serveOrder();  //*this function is the async but all the steps inside the function are synchronous it is executing 



// ! Error Handling in javascript for the promises 

/**
 * *we can handle the errors in javascript using the try and catch block for promises 
 * 
 * *try{} : it will get executed for the promise resolve state (So All logic will go here of async and await)
 * 
 * *catch(error) {} : it will get executed for the promise rejected state (here it will have one argument that is error)
 * 
 * *finally{} : this block will get executed either the promise got in any one of the stage either resolve or rejected then it will go into the settled stage then finally block will get executed 
 * 
 */


// !Example of handling the errors in javascript 

const serveOrder1 = async () => {

    try{
        // first for place the order 
        let orderStatusPromise = await placeOrder("cofffsee");     //* it will return the promise and I converted it into synchronous 

        console.log(orderStatusPromise);

        // second for processing the promise 

        let processOrderPromise = await processOrder("order is Placed");

        console.log(processOrderPromise);


        // third for the generateBill

        let generateBillPromise = await generateBill("processed the Order");

        console.log(generateBillPromise);
    }
    catch(error){
        // ^ here I can print the error or some lines for my referance 
        console.log(error);
    }
    finally{
        // ^ it will get executed compulsory either the promise got reject or resolve it will come under settled stage 
        console.log("DONEEEEEE");
    }


}


serveOrder1();


