//!NOw lets first Understand the How the reduce higher order function works on the Array 
//it is the one iteration method which will return the only one value 

//lets see how it works so that will help to create its polyfill that is the replica on the inbuilt function 

// let arr1 = [10,,30,40];

let arr1 = [10,,20,30];   //*then the length is 3


let valueOfInbuiltReduce = arr1.reduce((accumulaterValue , currentElement , currentIndex , originalArray) => {
        // console.log("accumulater Value : " , accumulaterValue);
        // console.log("Current Element : " , currentElement  );
        accumulaterValue = parseInt(accumulaterValue + currentElement);
        return accumulaterValue;
});



console.log("valueOf Inbuilt Reduce" , valueOfInbuiltReduce);
console.log(arr1.length);


//!implementing the reduce polyfill by creating its replica 
//!IMP Test cases I should remaimber while implementing its logic 
//^if there is the empty array then I have to throw the error because on the empty array inbuilt reduce also not works 
//^if the reduce is applied on the empty array but if the user is passing initial value of the accumalater then reduce will give that value as the result 
//^if the initial value is not passed by the user but the array is having the one element at the 0 th index then inbuilt retuce will pass that first Array element value 
//^if there is completely sparse array like let arr1 = [,,,] then also inbuilt will throw error that reduce on the empty array is not passible 
//^ it will pick the first non empty space 

Array.prototype.myReduce = function(callback , initialValueOFAccumalater){

    //Approach 
    //first check that callback should be function only 

    if(typeof callback !== 'function'){
        //then I have to throw the error 
        throw new Error(callback , " is not a function");
    }

    //here arguments will return the one object which will have the following things 
    // 1)no of the callback function reduce is having 
    // 2)and if I will pass the initial value then the total arguments will be 2 
    console.log(arguments); //*if passing the initialvalue then [Arguments] { '0': [Function (anonymous)], '1': 100 }
    console.log(typeof arguments);
    // console.log("length of the array : " , this.length);  //*it will give me the length with empty elements also but I want the length of the array having some elements present in it 

    //then I have to write the one another function that will give me the length of the this array by excluding the empty elements because if the entire array is sparse array then I have to throw the error 

    //if there is empty array with no initial value then also it should throw error that reduce is not possible on the empty array 

    if(getLengthExcludingEmptyElements(this) === 0 && arguments.length === 1){
        // emans the reduce is getting applied on the empty array and it is also not taking any argument then I have to throw the error 
        throw new Error("Reduce of empty array with no initial value");
    }

    //now I have to get the values of the two parameters 
    //1)accumulater value 
    //2)starting index so I can pass the correct current element 
    //if arguments.length >= 2 means user have passed the default value of the accumulater then take that else take the first element of the Array 

    var accumulater = arguments.length >= 2 ? initialValueOFAccumalater : getFirstNonEmptyElementFromArray(this);

    //now the starting index for current element depends upon the what the value of the accumulater is 
    // if initial value for accumulater is not passed then the accumulater value should be the first element of the Array then for the currentElement starting index will start from 1 so according to that getting the starting index 

    // if  arguments.length >= 2 then startingIndex = 0 else the accumulater value will be the first non empty element of the array and the starting index will be second non empty element index of that same Array 

    var startingIndex = arguments.length >= 2 ? 0 : getFirstNonEmptyElementIndex(this) + 1; //* +1 because accumulater is taking the current element at the i th index then my start index should be + 1 for the current element 


    //now iterate over the Array and pass each element with the accumalter 

    for(let i = startingIndex ; i < this.length ; i++){
        if(i in this){
            //means in this array at the i th index if the element is present then only exucute the below code 

            accumulater = callback(accumulater , this[i] , i , this);
        }
    }

    //return the updated value of the accumulater 

    return accumulater;



}



//*function to get the length of the array by excluding then empty elements of the sparse array 

function getLengthExcludingEmptyElements(array){
    let lengthOfThisArray = 0;

    //iterate and check if at the i th index element is present then only increase the length else there is empty element do not increse the length 
    for(let i = 0 ; i < array.length ; i++){
        if(i in array){
            lengthOfThisArray++;
        }
    }

    return lengthOfThisArray;
}


//*function to get the first non empty element from the given Array 

function getFirstNonEmptyElementFromArray(array){
    //iterate and get it and return it 
    for(let i = 0 ; i < array.length ; i++){
        if(i in array){
            //then return that first element itself 
            return array[i];
        }
    }
}


//*function to get the first non empty element index from the given Array 

function getFirstNonEmptyElementIndex(array){
    //iterate and get it and return it 
    for(let i = 0 ; i < array.length ; i++){
        if(i in array){
            //then return that index 
            return i;
        }
    }
}



let valueOfMyReduce = arr1.myReduce((accumulaterValue , currentElement , currentIndex , originalArray) => {
        let sum = accumulaterValue +  currentElement;
        accumulaterValue = sum;
        return accumulaterValue;
} , 100);

console.log("value Of My Reduce : " + valueOfMyReduce);

