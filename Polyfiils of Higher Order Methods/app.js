// !Where the polyfills will get used (its usecase) : 
/**
 * * 1) to add the new functionality in inbuilt function
 * 
 * * 2) to twik the functionality of inbuilt function (means change the implementation according to the usecase)
 * 
 * * 3)and if certain functionality is not available in certain browser menas example chrome and MS-Edge one newlly came javascript functionality but fire-fox does not support that functionality so fire-fox should also support that functionality for that purpose we will create the replica of that functionality so it will get support to the irefox also 
 *   
 */

let arr1 = [];

console.log(arr1);

// now I want to get the sum of the all array elements using the reduce method 

let sum = arr1.reduce((accumalater_value , currentElement , currentIndex , originalArray) => {
    console.log(currentElement);
    accumalater_value = accumalater_value + currentElement;
    return (accumalater_value);

} , 0);

console.log(sum);