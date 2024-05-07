//! lets first see Synchronus
// ^ just taking some simple task which are not heavy

// * both are the light task so that will get executed syncronouslly 

const task1 = () =>{
    console.log("I am task 1");
}

const task2 = () =>{
    console.log("I am task 2");
}

// ! heavy task 

let C = 1 ;

const heavyTask = () =>{
    console.log("Staring of the heavy task");

    let start = Date.now();   //*this will give the current timestamp 

    while((Date.now() - start) < 5000){   //* here it will break after the 5 seconds 
        // console.log(C++);  //*here it will wait for the 5 seconds and till that value will get incremented and displayed in the console
    }

    console.log("Ended heavy operation");
}

task1();
heavyTask();
task2();
