// !Question 
//^How to flatten a nested object or Array 

//!for given Nested Array give me the flatten Array 
// flattened Array will look like below 
// flattenedArray = [1 , 2 , 3 , 4 , 5];

const nestedArray = [1 , [2 , 3] , [4 , [5 , 6 , [7 , 8 , [9 , 10]]]]];

//*there is one inbuilt function to get the flatten array from the nested Array in javascript 

//! 1st way direct use .flat(Infinity)

// let flattenArray = nestedArray.flat(Infinity);

// console.log(flattenArray);

// !Second Way using the recursion 

// lets create the function that will take the nested Array and it will return the flatten Array 

function flattenArray(nestedArray){
    //here we will use the reduce function beause there is the concept called as the accumulater 
    //here the reduce it is returning the entire one Array 
    let flatenedArray = nestedArray.reduce((flatArray , currentElement , currentIndex) => {

        //now check if the current element is the Array then do something else do add that element in the flatArray that is accumulater and return the accumulater 

        if(Array.isArray(currentElement)){
            //then I have tio make the recursive call to the flattenArray that will return one array 
            //then spread that array and push all elements into the flatArray

            let tempArray = flattenArray(currentElement);

            flatArray.push(...tempArray);  //*here all the elements will get spread and push it into the 
                                            //*accumulater that is flatArray 
        }
        else{
            //means currentElement is single element directlly push that into the accumulater that is flatArray
            flatArray.push(currentElement);
        }

        // return the accumulater 
        return flatArray;

    } , []);

    //return the flatten Array that I am getting from the reduce function 
    return flatenedArray;
}


let flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray);








