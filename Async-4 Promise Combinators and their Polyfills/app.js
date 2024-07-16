// !Agenda

/**
 * ^1)Promise Combinaters :  (All the promise Combinators returns the Combined Promise)
 * &                        i)Promise.all()
 * &                        i)Promise.allSettled()
 * &                        i)Promise.race()
 * &                        i)Promise.any()
 * 
 * 
 * ^2)How to create All Promise Combinaters Polyfills: 
 */




/**
 * !Promise Combinator : 
 * *                combining the multiple promises into the one promise is known as the promise combinators 
 * 
 * !When to use the Promise Combinators : 
 * *                            i)when I have to deal with the multiple promises and I have to combine the multiple promises then I have to use the promise combinators 
 * 
 * 
 * 
 * 
 * 
 * !Differance between promise chaining and promise combinators :
 * 
 *?          i) in promise chaining we chain the multiple promises in the serial async fashion 
 *?          ii) but in promise combinators we can run the multiple promises in the parallel way 
 * 
 * 
 * 
 * !Actual Usecase Examples of the promise combinators : 
 * *                            i)to load the instagram page which will have the two api call 
 *                                             i) first to fetch the user data from the backend 
 *                                             ii) second to fetch all user posts from the server 
 *                  for this kind of the problem statement we can use the promise combinators (so the data we will get parallely so time also get reduce and user will get the better experiance )
 * 
 * 
 * !there are multiple Promise Combinators are there : (All will behavce in the differant fashion )
 * &                    i)Promise.all()    
 * *                                    1)if any one promise get rejected then combined promise will also get rejected for Promise.all()
 * 
 * &                    ii)Promise.allSettled() : 
 * *                                    1)here combined promise will always get fullfilled means resolved 
 * *                                    but it will return 
 * 
 * &                    iii)Promise.race() : 
 * *                                    1)here the state of the combined promise is depend on the any one promise from the list which will first get resolved or rejected 
 * *                                    that will be the state of the combined promise in the Promise.race();
 * 
 * &                    iv)Promise.any() : 
 * *                                    1)here combined promise state will be decided on the basis of 
 * *                                    if any promise is getting rejected then Promise.any() will ignore that till the all promise to get iterate and whichever the first 
 **                                      promise will get resolve that might be the state of the combined promise 
 * 
 * *                                      2) if all of the promise from the list is getting rejected then the combined promise will also get rejected 
 *  *                                     3) it will ignore the rejeceted promises wait if any promise get resolved or not 
 * 
 * 
 * 
 * 
 * !In detain about the all the promise combinators : 
 * 
 * 
 * 
 * ! 1)Promise.all() : 
 *                  suppose we will have the two promises for the instagram user account example 
 *                                  *i) (promise-1) first to fetch the user data from the backend 
 *                                  *ii) (promise-2) second to fetch all user posts from the server 
 *          
 * 
 *       ^Syntax = combinedPromise = Promise.all([promise-1 , promise-2]);
 * 
 * 
 *!       KeyPoints to remaimber :
 **                 i) Promise.all() will return the promise but it will be combined promise 
 **                 ii) it will take the list of promises in the form of the Array 
 **                 iii)if any one promise get rejected then combined promise will also get rejected for Promise.all()
 **                 iv) if all promises succeed , then combined promise get fullfilled means resolved to list of the results from each promise whatever 
 *                  *they are returning that will get stored in the list format 
 **                 v) return type is the list of all the promises data [data1 , data2]
 **



 * 
 * ! 1)Promise.allSettled() : 
**                                      1)here combined promise will always get fullfilled means resolved for Promise.allSettled()
 * *                                    2) but it will return list in that list for each promise it will return the objects 
 * *                                    3) and that each object will have 2 things 
 * &                                                i)status : if that particular promise is resolved then status = resolved else it will be rejected 
 * &                                                ii)result : if that promise is resolved then result = data else result = error
 * 
 * 
 * ^               Syntax = combinedPromise = Promise.allSettled([promise-1 , promise-2]);
 * 
 * 
                * ! return type = [
                * 
                * ^         {status : resolved or reject , result : data / error }    (for promise 1)
                * ^          {status : resolved or reject , result : data / error }    (for promise 2)                
                * ^         {status : resolved or reject , result : data / error }     (for promise 3)

                * ^          ]
 * 
 * 
 * 
 * 

 * 
 * ! 1)Promise.race() : 
 * *                1) it will also return the combined promise 
 * *                2)here the state of the combined promise is depend on the any one promise from the list which will first get resolved or rejected so that will be the state of the combined promise also 
 * 
 * 
 * ^               Syntax = combinedPromise = Promise.race([promise-1 , promise-2]);
 * 
 * ^               Note : here the combined promise will have the either data or result in it 
 * 
 * 





 * 
 * 
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
 * !if we want to pass error stack with the custom message then we have to use the following 
 * !     reject(new Error("Message that you want to pass"));
 * 
 */

//  !Now lets iimplement the all promise combinators one by one in differant differant files 


// learned about the how to process the multiple promises at parallel by using the differant promise combinators that are Promise.all() , Promise.allSettled() , Promise.any() , Promise.race() and also created the polyfills of the each promise combinators 






