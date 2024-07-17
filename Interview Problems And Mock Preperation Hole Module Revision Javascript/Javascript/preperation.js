// !Solving the All the Questions one By one to get beetter in the Scaler Javascript Mock 
//^first lets cover the theory 

// What is javascript 
// how javascript Engine works 
// variables in javascript
// hosting in javascript 
// TDZ(temporal dead Zone)
//*do from below 
//Types of Function 
// all types of copies in javascript 
//array strings and their inbuilt methods 
// rest and spread opearator 
// async way of promgramming 
//Scope Chaining : mechanism which looks for the variables 
//Lexical Scope : where we have declared there only we can access but where we are calling the function there we cannot access 
//Closure 

// variables and variable hosting 
// console.log(a); //undefined 

// console.log(b);  //referance error cannot access it before it actual initialization because of the TDZ
// console.log(c);    //referance error 


var a = 10;
let b = 10;
const c = 90;

// var a = 20;

// console.log(a);



// console.log(num1);//undefined because of the respect to the block scope 

//now lets do some behaviour in the block and lets see how it works in the block scope 

{

    // console.log(num1);//undefined because of the respect to the block scope 
    // console.log(num2);  //referance error because of the TDZ

    
    

    var a = 455;   //it will behave same as the global scope variable but in memeory it will get created newlly because number is primitive datatype and in javacsipt primitive datatypes are immutable 

    let num2 = 85;
    const PI = 3.14;
}


//Now in the function var will be with respect to the function scope only 
// console.log(favNum);//not defined 

function abc(){

    // console.log(favNum);//undefined 

    // console.log(num2);  //referance error

    var favNum = 100;

    console.log(favNum);  //100

    
    let num2 = 45;
    const radius = 2;
}

// console.log(favNum);//not defined 

abc();



//*Closure 
//creating the nested function 

function outer(){
    let a = 20;
    let b = 45;
    var c = 100;

    function inner(){
        // for the variables a nd b the closure will get created inside the inner function 
        console.log("a = : " , a);
        console.log("b = : " , b);
    }

    return inner;
}

let innerFunction = outer();

//now I have to invoke the inner function 
innerFunction();

