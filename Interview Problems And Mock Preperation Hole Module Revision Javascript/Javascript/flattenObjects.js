// !Flatten a nested object in javascript how to solve the Question 

//lets create the one depply nested Object 

let deepllyNestedObject = {
    myName : "Manoj",
    address : {
        road : "karol bag",
        city : "delhi"
    },
    designation : {
        position : "developer",
        salary : 35000,
        hobbies : {
            drink : "tea",
            game : "football",
            food : {
                favDish : "biryani",
                mainCourese : {
                    dish1 : "chicken masala",
                    dish2 : "panner masala"
                }
            }
        }

    }
}


// console.log(deepllyNestedObject);
//!Note there is no inbuilt method to flat the nested object 
//so we have to create our own function to get the flatten nested object in javascript from the depply nested object 

///lets take  one empty object 
let flatObject = {};

function falttenNestedObject(NestedObject){
    //now I have to check that if the key is present in the deepllyNestedObject then further check that THAT KEY is again having value as the one object then make the recursive call else in the flatObject add the current key with its value from the deepllyNestedObject to flatObject 

    for(let key in NestedObject){
        // then check that type of the all the keys value is object or not 
        //NestedObject.key this will give me the value at that particular key 
        //but here I have to check the actual key each time 

        if(typeof NestedObject[key] === 'object' && NestedObject[key] !== 'null'){
            //then the current value of that particular key is object then again made the recursive call to falttenNestedObject by passing the current object so it will flat it 
            falttenNestedObject(NestedObject[key]);
        }
        else{
            //means the current value of that particular key is not a object it is normal value 
            //then add that key and value into the flat object 
            // we can add using dot(.) , or we can use the []square brackts 

            //here I am setting at the flatObject[in this key] = set this value 

            flatObject[key] = NestedObject[key];
        }
    }

    return flatObject;
}


let flattedobject = falttenNestedObject(deepllyNestedObject);




console.log(flatObject);
// console.log(flattedobject);

// Time and Space complexity for the above function 
//* TC 
// Combining these factors, the overall time complexity of the function is O(n + m), where n is the number of properties in the NestedObject and m is the number of nested objects.
//*SC
// Combining these factors, the overall space complexity of the function is O(n + m), where n is the number of properties in the NestedObject and m is the number of nested objects.

