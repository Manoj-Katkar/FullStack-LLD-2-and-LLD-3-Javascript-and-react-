
let arr1 = [10 , 20 , , 50 , 84];

console.log("original Array : " , arr1);



//!filter polyfill implementation 
//!filter() method also takes the two arguments 
// 1) callback function 
// 2) thisArgs value 

let inbuiltFilterArray1 = arr1.filter(function(currentElement , currentIndex , originalArray){
    //lets multiply the each number by num 
    // console.log(this);      //*here it is denoting to thisArgs
    if(currentElement >= 15){

        return currentElement;

    } 


} );




console.log("inbuiltFilterArray1 : " , inbuiltFilterArray1);   //*original array is sparse then inbuilt filter is ignoring that array element it is not getting added in the filteredArray 




Array.prototype.myFilter = function(callback , thisArg){
    //approach
    //first check that callback should be function only 
    if(typeof callback !== 'function'){
        throw new Error(callback , ' is not a function');
    }

    //inbuilt filter also return the filter Array so create the new Array 
    let filteredArray = [];

    //now I have to iterate over the array and pass the each array element to the callback 
    //and whatever the elements that callback will return that I have push iot into the filtered Array 

    for(let i = 0 ; i < this.length ; i++){
        //first I  have to make sure that before calling the function I have to call with the appropriate element which is present in the this array 

        if(i in this){
            //means in this array at i th index if element is there then only execute the below lines of the code 

            //but here I  have to apply the one more check that is the user is passing the value of thisArgs then in the callback it should point to the thisArgs or bydefault this 

            let context = thisArg ? thisArg : this;

            //call the callback function that will return the boolean result 
            //either true or false 
            if(callback.call(context , this[i] , i , this)){
                //means this[i] current element statisfyies the condition of the callback
                //then add that element to the filteredArray
                filteredArray.push(this[i]);
            }
        
            
            
        }

    }

    return filteredArray;

}



let myFilterArray2 = arr1.myFilter(function(currentElement , currentIndex , originalArray){
    //lets multiply the each number by num 
    // console.log(this);      //*here it is denoting to thisArgs
    if(currentElement >= 15){

        return currentElement;

    } 

} );


console.log("myFilterArray2 : " , myFilterArray2);






