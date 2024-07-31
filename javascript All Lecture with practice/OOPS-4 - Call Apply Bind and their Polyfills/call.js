function describeGlobal(greetings){
    // console.log(this);

    return `${greetings} Hi , My Name is ${this.name} and I am ${this.age} years old `;
}

// describeGlobal("Manoj" , 25);      //this = global object of the node js 

// console.log(describeGlobal("Manoj 01" , 25));    //this = global object of the node js 


const person1 = {
    name : "Manoj",
    age : 24,

    describe : describeGlobal

}


const person2 = {
    name : "Raj",
    age : 20,

    describe : describeGlobal

}

// console.log(describeGlobal.call( person1 , person1.name  , person1.age));     //*here this will point to the global object for the  parameters 
                                                        //*but inside the function this will point to the current object  that is person1 
// console.log(person2.describe(this.name , this.age));    //!this global object properrties will override by this in the function 

// ^ calling the methods with call and apply 

//! call() : parameters(this object referance value , and other parameters (,) sepearated)

// console.log(describeGlobal.call(person1 , "Good Morning"));
// console.log(describeGlobal.call(person2 , "Good Afternoon"));


//! apply() : parameters(this object referance value , and other parameters ([parameter2 , parameter3]) in the form of the Array )

// console.log(describeGlobal.apply(person1 , ["Good Night"]));
// console.log(describeGlobal.apply(person2 , ["Good Morning Bhai utho"]));

//! bind() : it is same as the call but it will return the new function hence we have to store that function and again make the call then only it will get executed 
// it will create the one function with the provided values as the parameter and it will return that so we have to store it in some variable and make the call to that new function varaible 


// console.log(describeGlobal.bind(person1 , "I am from Bind Greetings"));
// describeGlobal.bind(person1 , "I am from Bind Greetings")

let newBindFunction = describeGlobal.bind(person1 , "I am from Bind Greetings");
console.log(describeGlobal.bind(person1 , "I am from Bind Greetings"));

console.log(newBindFunction());

// ^when to use bind : when I only want to set the value of the this keyword but I do not want to call that function at that same time then use bind 

// ^when to use call , apply : when I wanted to set the value of the this keyword and wanted to get some statements about the objects with its data at that same time only then use call and apply , or to getthe cusom function logic to get execute with respect to particular object 

