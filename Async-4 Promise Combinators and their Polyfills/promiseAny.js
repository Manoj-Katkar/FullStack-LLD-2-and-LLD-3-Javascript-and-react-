/**
 * ! 1)Promise.any() : 
 * *                           1)here combined promise state will be decided on the basis of 
 * *                            if any promise is getting rejected then Promise.any() will ignore that till the all promise to get iterate and whichever the first 
 **                             promise will get resolve that might be the state of the combined promise 
 * 
 * *                            2) if all of the promise from the list is getting rejected then the combined promise will also get rejected 
 *  *                           3) it will ignore the rejeceted promises wait if any promise get resolved or not 
 * 
 * 
 * ^                  Syntax = combinedPromise = Promise.any([promise-1 , promise-2]);  
 * 
 * 
 */



 function resolveQuickly(){
    return new Promise((resolve , reject) => {
        //it will get resolve after 500 miliseconds 
        setTimeout(() => {
            resolve("Resolved Quickly");
        } , 500);
    })
 }


 function resolveSlowly(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Resolved Slowly")
        } , 6000)
    })
 }


 function rejectQuickly(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("Reject Quickly");
        } , 1000);
    })
 }


 //now apply the promise.any on the above promises 


// let combinedPromise = Promise.any([rejectQuickly() , resolveSlowly() , resolveQuickly()])

// combinedPromise
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })

  

//! if all promises get rejected  from the list            



function rejectQuickly1(){
    return new Promise((resolve , reject) => {
        //it will get resolve after 500 miliseconds 
        setTimeout(() => {
            reject("reject Quickly1");
        } , 500);
    })
 }


 function rejectSlowly(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("reject Slowly")
        } , 6000)
    })
 }


 function rejectQuickly2(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("Reject Quickly2");
        } , 1000);
    })
 }


//  let combinedPromise1 = Promise.any([rejectQuickly2() , rejectSlowly() , rejectQuickly1()]);   
 //* now the combined promise will also get rejected
 //*And I will get the rejection resons for my both of the promises  

//  combinedPromise1
//                 .then((result) => {
//                     console.log(result);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })





                
//!Imlementing the polyfill of the Promise.any()

Promise.myAny = function(promisesArray){
    //*Approach 
    //first check that promisesArray should be the Array only 
    //second check that if user passed the empty array then also I have to throw the error 
    //*then main logic 
    //if any of the promise from the promisesArray is getting resolved then the combined Promise will also get resolved 
    //but if any of the promise if getting rejected then Promise.any will wait untill the last promise if that also fails then entire the combined Promise will also get failed 



     //first check that promisesArray should be the Array only 
     if(Array.isArray(promisesArray) === false){
        throw new Error('promises passed are not in the Array format');
     }

     //second check that if user passed the empty array then also I have to throw the error 
     if(promisesArray.length === 0){
        // means the empty array is passed 
        throw new TypeError('Promise.any on Empty array is not possible');
     }


     //now main logic 
    //  return the new combined Promise 
    //if any of the promise from the promisesArray is getting resolved then the combined Promise will also get resolved 
    //but if any of the promise if getting rejected then Promise.any will wait untill the last promise if that also fails then entire the combined Promise will also get failed 

    return new Promise((resolve , reject) => {
        //now iterate ove the each promise from the promisesArray 
        let errorArray = [];
        let rejectPromiseCount = 0 ;
        promisesArray.forEach((currentPromise , currentIndex) => {
            //now I will try to resolve the each promise 
            Promise.resolve(currentPromise)
                                        .then((result) => {
                                            //if any of the promise is getting resolved then combined promise will also resome with its message from that particular promise 
                                            resolve(result);
                                        })
                                        .catch((error) => {
                                            errorArray[currentIndex] = error;
                                            rejectPromiseCount++;

                                            //now check rejectPromiseCount === promisesArray.length means entire combined promise will also get rejected 

                                            if(rejectPromiseCount === promisesArray.length){
                                                //then reject the combined promise will all the values from the rejected promise 
                                                //I have to throw the aggregate error 
                                                reject(new AggregateError ( errorArray , 'All Promises were rejected'));
                                            }
                                        })
        })
    })
}




//^checking for all rejection 


// let combinedPromisemyAny1 = Promise.myAny([rejectQuickly2() , rejectSlowly() , rejectQuickly1()]);   
// //* now the combined promise will also get rejected
// //*And I will get the rejection resons for my both of the promises  

// combinedPromisemyAny1
//                .then((result) => {
//                    console.log(result);
//                })
//                .catch((error) => {
//                    console.log(error);  //*it will get rejected with the all the erroro values from the differant promises 
//                })

 
               

//^checking for any one get resolved 
let combinedPromisemyAny2 = Promise.myAny([rejectQuickly() , resolveSlowly() , resolveQuickly()]);   
// //* now the combined promise will also get rejected
// //*And I will get the rejection resons for my both of the promises  

combinedPromisemyAny2
               .then((result) => {
                   console.log(result);
               })
               .catch((error) => {
                   console.log(error);  //*it will get rejected with the all the erroro values from the differant promises 
               })        