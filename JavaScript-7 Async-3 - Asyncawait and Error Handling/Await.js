// !All about the await()   : it is used to convert the set of the lines in the synchronous Fashion 


// ^ I have to practice await Syntax for the promises   

// start practice 

const promise = new Promise((resolve , reject) => {
    // & intentionally I will resolve the promise after the 5 seconds to understand the await in depth

    setTimeout( () => {
        resolve ("promise resolved");
    } , 5000);
});



// ! NBow lets resolve the promise inside the Named function which so simple 

const fetchData = () => {

    promise.then((data) => {       //this promise will be resolved after the 5 seconds 
        console.log(data);
    });


    console.log("I am done");
}

// call the function 
// fetchData();   



// ! Now resolve the promise inside the asynchronous function with await to execute the some set of the lines in the form of synchronous Nature 

const handlePromise = async () => {

    const message1 = await promise;

    console.log(message1);

    // ! here if I will try to access the promise state it will be resolved because once the promise resolved how it will go again in pending stage it will go in the settled stage 

    console.log(promise);     //*Promise { 'promise resolved' }

    const message2 = await promise;    //*here again I am targetting the same promise which is resolved already
                                        //!hence the both promise will get resolved after the 5 seconds because it is targetting the same promise 

    console.log(message2);     
    
    
    console.log("I am Done");

}

console.log("start");
// fetchData();
handlePromise();
console.log("End");

// In this above way I can convert  the soome set of lines in the Async using async and Synchronous using the await keyword 