const car = {
    name : "Creta",
    color : "white"
}

function buyCar(price){
    console.log(this , "from buyCar function"); //current object 
    console.log(`Brought a ${this.color} colored ${this.name} of ${price}`);
}

// buyCar.call(car , 100000);

// !Now I wanted to implement the .call() method polyfill

// ^ ! 4) What is Polyfills : means your custom implementation of your inbuilt function 
// ?                        i) replica of the inbuilt functions are known as the polyfills
//?                        ii) interviewers will ask it because they wanted to check the how much the deep understanding of the inbuilt functions the candidate have by telling them to implement any higher order function polyfill




// !to know more about the spread operator 

// let str = "Manoj Katkar";


// function abc(args1 , args2 , args3 , args4 ,args5 ,args6 , args7 ,args8 ,args9){
//     console.log(args1);
//     console.log(args2);
//     console.log(args3);
//     console.log(args4);
//     console.log(args5);
//     console.log(args6);
//     console.log(args7);

//     console.log(args8);
//     console.log(args9);

// }

 //*spread opearator will pread the each character and it will pass as an argument to the abc function 

// abc(...str); 


//!implementation of the call method polyfill 
// call function input parameters 
// 1) this object referance value 
// 2) N no of the arguments in the quama sepearated (value1 , value2) (this we will handle with the spread operator )

Function.prototype.myCall = function(currentObject = {} , ...args){  

//&(this object value that is now empty , ...args all arguments that will be quama sepearated values spread will handle it )

        // console.log(currentObject);
        console.log(this);  //*here the value of this will the function that your are calling with myCall custom call method


        //now to make sure the only function is calling myCall method I have to do one check 
        if(typeof this != 'function'){
            throw new Error(this , 'is not callable');
        }

        //now I have to add this variable function from which the myCall method got called in the my current Object 
        //adding as the key value pair 

        currentObject.tempFunction = this,

        //then I have to call the function by passing the arguments 
        currentObject.tempFunction(...args)



}


//!calling the both normal call and the custom polyfill of the call 

// buyCar.call(car , 100000);

// buyCar.myCall(car , 15000);    //*execution => myCall() => then buyCar()







// !implementing the apply() method polyfills : just I have to take the args in the form of the Array 


Function.prototype.myApply = function(currentObject = {} , argsArray = []){

    //check that this keyword should alway it will be function 
    if(typeof this != 'function'){
        throw new Error(this , ' is not callable');   //*doubt how to get this error 
    }

    //do one custom check for the arguments are not in the formof the Array then throw the error 
    if(!Array.isArray(argsArray)){   //*means arguments are not in the form of the Array then throw error 

        throw new Error(argsArray , ' is not in the Array format');

    }

    //add the called function as the tempFunction in the currentObject 
    currentObject.tempFunction = this;

    //call the tempFunction
    currentObject.tempFunction(...argsArray);

}

//calling the inbuilt and our polyfill for the Apply 

// buyCar.apply(car , [150]);
// buyCar.myApply(car , [2547800]);


//!ask it to the TA why the below try and catch is not able to handle this error 

// try{
//     // buyCar.apply(car , [150]);
//     car.myApply(car , [2547800]);
// }
// catch(error){
//     console.log(error);
// }








// !implementing the polyfill of the ind function 
//in the call I am calling the function here I do not have to call the function here I have to return that function 


Function.prototype.myBind = function(currentObject = {} , ...boundedArgs){
    
    //first check that this keyword should point to the function only 
    if(typeof this != 'function'){
        // then throw the error 
        throw new Error(this , 'is not callable');
    }

    //in bind I do not have to add the function inside the current object here I have to return the new function when it will call then the below function should get executed 

    const tempFunction = this;

    //&now in the bind I have to do not make the call for the tempFunction here I have to return that function 

    return function(...args){
        //*here I have to write the function logic when it will be called that should executed 
        //so to execute I can use the call or apply any one 

        return tempFunction.apply(currentObject , [...boundedArgs , ...args]);  
        
        //!two types of the argumenst because at bound stage and at the calling stage of the new function at both time I can able to pass the arguments 
    }
}

//8use the both bind and the custom myBind polyfill 

let originalBindFunction = buyCar.bind(car , 2045);

//then I have to call 
originalBindFunction();


//same I have to do for the my custom polyfill of the bind function also 

let customPolyfillFunctionOfBind = buyCar.myBind(car , 80000);

console.log(customPolyfillFunctionOfBind);

customPolyfillFunctionOfBind();

// console.log(customPolyfillFunctionOfBind());  //*it will return the undefined 





// !note in the mock or in the interview only implementthe function that they have given 
