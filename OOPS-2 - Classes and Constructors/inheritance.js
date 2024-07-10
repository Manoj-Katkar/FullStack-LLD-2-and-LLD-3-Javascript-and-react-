//* Parent/Base class: Class FROM which other classes are inheriting : Person
//* Derived class: Class which is inheriting from parent/base class : Student and Teacher
//* super constructor: constructor of the parent/base class

//* extends keyword is used to inherit the parent class 
// *we can inherit the multiple classes just use extends keyword and then (class1 , class2 , class3) separeted class Names 
// !while calling the super class constructor if you not pass the values then those values will be set to undefined


// !Multiple inheritance in javascript is not allowed 




//! Static methods 
/**
 * *the methods which belogs to the class are known as the static methods which will not binded to the object 
 */


// !private properties in javascript class 
/**
 * *There are certain properties that you do not want to access it directlly for that we will use private keyword so they will be accessible only within the class
 * 
 * !how to make any property as the private : 
 * *                                    we have to just use the # symbol before the that property name 
 * ^ Example : #aadharNumber   (here aadhar number became the private so no outer class can access it )
 */



// !before 

class Person {
    constructor(_name, _age, _gender) {
        this.name = _name;
        this.age = _age;
        this.gender = _gender
    }

    sayHello() {
        console.log(`${this.name} says hello`)
    }
}

// const person1 = new Person("Sanchit", 26, "male")
// console.log(person1)

class Student extends Person {

    //! static variable 
    static studentCount = 0

    #aadharNumber;       //^for the private properties you have to define it explicitlly 


    constructor(_name, _age, _gender, _rollNumber, _class, _aadharNumber) {

        super(_name, _age, _gender); //!call the super constructor with parameters 

        this.rollNumber = _rollNumber
        this.class = _class
        this.#aadharNumber = _aadharNumber

        // !Accessing the static variable using the className.varaibleName
        Student.studentCount++;
    }

    // !still my aadhar number is private property I can able to access that using the method in the same class

    showMaskedAadhar() {
        const maskedAadhar = this.#aadharNumber.substring(3)
        return `***${maskedAadhar}`   //*both the ways work this is masked means it is hided 
        // return maskedAadhar;
    }


    // !static methods 
    static totalStudents() {
        console.log(`Total students: ${Student.studentCount}`);  //*accessing the studentCount using  the classNAme becasue it is static 
    }
}

class EngineeringStudent extends Student {
    constructor(_name, _age, _gender, _rollNumber, _class, _package){

        super(_name, _age, _gender, _rollNumber, _class)

        this.package = _package;
    }
}

const student1 = new Student("Sanchit", 26, "male", 7, "LLD Full stack", "fasdfdas")
// Student.totalStudents()
// console.log(Student.totalStudents)
const student2 = new Student("Shynu", 26, "male", 7, "LLD Full stack", "fgdfjgh")
// Student.totalStudents()
// console.log(student1.showMaskedAadhar())
// console.log(student1)

// console.log(student1.aadharNumber);  //!error : Private field '#aadharNumber' must be declared in an enclosing class

//& then to access the private property I have to call the method which is declared in student class 

console.log(student1.showMaskedAadhar());





class Teacher extends Person {
    constructor(_name, _age, _gender, _batchName, _batchRating) {
        super(_name, _age)
        this.batchName = _batchName;
        this.batchRating = _batchRating
    }
}

// const teacher1 = new Teacher("Sanchit", 26, "male", "LLD FUll stack", "4")
// console.log(teacher1)
// teacher1.sayHello()