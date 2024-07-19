// Inbuilt Higher Order functions

// !map() : is is used to iterate over the Array and its take one call back function with that we can perform any operation 

let arr = [1 , 2 , 3 , 4 , 5];

// function squareOfElement(element){
//     return (element * element);
// }


// * Same output we will get it for the function with Expression 

let squareFun =  function(element){
    return (element * element);
}

// let squaresArray = arr.map(squareOfElement);    //! it will not modify the original Array 
                                                // !it will create the new Array and return that 

let ansArr = arr.map(squareFun);   

console.log(ansArr);

// console.log(squaresArray);     //~New Array 

console.log(arr);           //?original Array


// !filter() : it is used to filter the Array elements and add it in the new Array which satisfy the callabck function condition 

// ?Now lets problem statement : I want the all the Array elements from the given Array Arr which are positive

let Arr = [-100 , 500 , -250 , -751 , 447];

// call back as the Arrow function 

let positiveNumbers = (element) => {
    if(element >= 0){
        return element;
    }
}

let positiveArray = Arr.filter(positiveNumbers);  //* it will filter and create the new Array and adds the Array elements into it 

console.log(positiveArray);

// also print the original Array 
console.log(Arr);




// !forEach() : it is simplly replacement of the for loop 
// !            it will iterate over the Array elements but it will not return anything 


// ^Example 

let squareOfElement =  (element) => {
   console.log(element * element);
}

Arr.forEach(squareOfElement);   //* replacement of the for loop but not modify the original Array 

console.log(Arr);



// !Some() :  it will return the true when the any one of the element of the Array satisfies call back function condition  else it will return false 

//! every() : it will return true when the all the Array elements will statisfies the call back function condition then only it will return true else it will return false 
//          !it will check for the every element of the Array is satisfying the call ba


// *Example for some() HOF 

let checkPositiveNum = (element) => {
    return (element >= 0);
}

let positive_some = Arr.some(checkPositiveNum);

console.log(positive_some);   //*true because there are few numbers are there which are positive 



// *Example for every method 

let positive_every = Arr.every(checkPositiveNum);  //! it will return false because All elements in our Array Arr are not >= 0 

console.log(positive_every);





// ! reduce() : it is also HOF but it will take the two parameters 
/**
 * * first parameter = call-back function 
 * * second parameter = default value / initial value
 * 
 * 
 * ! call back function will take the two parameters 
 * * first parameter = that default valeu in some varaible 
 * * second parameter = Array element 
 * 
 * ^when to use : when we want to do the operation over the All the Array elements and get the one Ans then use it 
 */



// *Example

let newArray = [1 , 2 , 3 , 4 , 5];

let sumOfArrayElements = newArray.reduce((sum , arrayElement) => {
            sum = sum + arrayElement;
            return sum;
} , 0);

console.log(sumOfArrayElements);



