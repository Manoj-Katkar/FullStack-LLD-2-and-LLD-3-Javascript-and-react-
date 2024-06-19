//! lets first see Synchronus
// ^ just taking some simple task which are not heavy

// * both are the light task so that will get executed syncronouslly 

const task1 = () =>{
    console.log("I am task 1");
} 

const task2 = () =>{
    console.log("I am task 2");
}

// ! heavy task in Synchronus way

let C = 1 ;

const heavyTask = () =>{
    console.log("Staring of the heavy task");

    let start = Date.now();   //*this will give the current timestamp 

    while((Date.now() - start) < 5000){   //* here it will break after the 5 seconds 
        // console.log(C++);  //*here it will wait for the 5 seconds and till that value will get incremented and displayed in the console
        // console.log("Waiting for 5 seconds");
    }

    console.log("Ended heavy operation");
}


    // * now the Async function it will not block the next line of code 

const AsyncHeavyTask = () => {
    console.log("Start heavy Task");

    // now set time out function which is Async in nature 
    setTimeout(() => {
        console.log("End heavy task");
    } , 5000); 
}

task1();
// heavyTask();
AsyncHeavyTask();
task2();

// !Module or library : prebuild code that we are going to use 

/**
 * * if we want to use the inbuild modules of the javascript then there are two ways are there 
 *! 1)using import  
 *! 2)using require 

 *readFile will get executed in task queue and call back will get into the call back queue and it will get executed in call stack itself 
 */
