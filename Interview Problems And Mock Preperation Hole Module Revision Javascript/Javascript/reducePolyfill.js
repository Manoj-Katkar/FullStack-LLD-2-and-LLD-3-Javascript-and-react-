let arr1 = [10 , 20 , 30 , 100];

// let sum = arr1.reduce((accumulaterValue , currentElement , currentIndex , originalArray) => {
//     accumulaterValue = accumulaterValue + currentElement;

//     return accumulaterValue;
// } , 10);


// console.log(sum);


//inbuilt reduce will take the 2 arguments 
//1) callback function 
//2)default value of the accumulater 


Array.prototype.myReduce = function(callbackFunction , defaultValueOfAccumulater){

    //Approach 
    //first check the call back should be function only 
    if(typeof callbackFunction !== 'function'){
        throw new Error(callbackFunction , " is not a function");
    }


    //here arguments will return the one object which will have the following things 
    // 1)no of the callback function reduce is having 
    // 2)and if I will pass the initial value then the total arguments will be 2 

    if(getLengthOfArrayExcludingEmptyElements(this) === 0 && arguments.length === 1){
        // means the user Have not passed the value of the accumulater 
        throw new Error("reduce on empty array with no initial value");
    }


    //now I have to find accumulater value and starting index value 

    let accumulaterValue = arguments.length >= 2 ? defaultValueOfAccumulater : getFirstNonEmptyElement(this);
    let startingIndex = arguments.length >= 2 ? 0 : getFirstNonEmptyIndex(this) + 1;

    //now iterate over the all the elements and get the updated accumulater value from the callback and return that 

    for(let i = startingIndex ; i < this.length ; i++){
        // now call the callback function 

        if(i in this){
            accumulaterValue = callbackFunction(accumulaterValue , this[i] , i , this);
        }

        
    }

    return accumulaterValue;


}


function getLengthOfArrayExcludingEmptyElements(array){
    let length = 0;

    for(let i = 0 ; i < array.length ; i++){
        if(i in array){
            // means if at the i th index in array there is element then only increment the count 
            length++;
        }
    }

    return length;
}



function getFirstNonEmptyElement(array){

    for(let i = 0 ; array.length ; i++){
        if(i in array){
            // then return that element 
            return array[i];
        }
    }
}


function getFirstNonEmptyIndex(array){
    for(let i = 0 ; array.length ; i++){
        if(i in array){
            // then return that index
            return i;
        }
    }
}





let sum = arr1.myReduce((accumulaterValue , currentElement , currentIndex , originalArray) => {
    accumulaterValue = accumulaterValue + currentElement;

    return accumulaterValue;
} , 10);


console.log(sum);