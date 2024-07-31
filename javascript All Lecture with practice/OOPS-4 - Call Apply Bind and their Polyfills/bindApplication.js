//Now I want that on clicking on the button the intoduce function of the person object should get trigred 

let person1 = {
    name : "Manoj",
    age : 24,
    introduce : function(){
        console.log(this);
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}


// target the html element that is button 
let btn = document.querySelector("button");

// btn.addEventListener("click" , person1.introduce);  //*when you are adding the event litner at that time this keyword is pointed to the targetted html element on which the event occured 

//^hence I have to use the bind method because I do not want it should get executed at same time when the user click on the button then only it should get executed 

//!below both the ways will work


// btn.addEventListener("click" , () => {
//    let bindedFun =  person1.introduce.bind(person1);
//    bindedFun();
// });


btn.addEventListener("click" , person1.introduce.bind(person1));




// !to know more about the spread operator 

let str = "Manoj Katkar";


function abc(args1 , args2 , args3 , args4 ,args5 ,args6 , args7 ,args8 ,args9){
    console.log(args1);
    console.log(args2);
    console.log(args3);
    console.log(args4);
    console.log(args5);
    console.log(args6);
    console.log(args7);

    console.log(args8);
    console.log(args9);

}

 //*spread opearator will pread the each character and it will pass as an argument to the abc function 

abc(...str); 