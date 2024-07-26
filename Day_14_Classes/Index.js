// Activity 1: Class Definition 
// Task 1:

// class Person{
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     getgreeting() {
//         return `My Name is ${this.name}. I am ${this.age} Years old`;
//     }
// const finval = new Person("Anuj", 26)
// console.log(finval);



// Task - 2:
// class Person{
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     getgreeting() {
//         return `My Name is ${this.name}. I am ${this.age} Years old`;
//     }

//     Updatedage(newage){
//         this.age = newage;
//         console.log(this.age);
//     }
//     }
// const finval = new Person("Anuj", 26)
// console.log(finval);
// finval.Updatedage(35);



// Activity -  2: Class Inheritance
// Task - 3



// class Person{
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     getgreeting() {
//         return `My Name is ${this.name}. I am ${this.age} Years old`;
//     }
//     }

//     class Student extends Person{
//         constructor(name , age, studentId){
//         super(name, age);
//         this.studentId = studentId;
//         }
//     getStudent() {
//         return ` My Name is ${this.name}. age is ${this.age} and student id is ${this.studentId}`
//     }
// }
//     let finalStudent = new Student("Anamika", 24, "0903123456");
//     console.log(finalStudent.getStudent());



// Task - 4
// class Person{
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }
//     getgreeting() {
//         return `My Name is ${this.name}. I am ${this.age} Years old`;
//     }
//     }

//     class Student extends Person{
//         constructor(name , age, studentId){
//         super(name, age);
//         this.studentId = studentId;
//         }
//     getStudent() {
//         return ` My Name is ${this.name}. age is ${this.age} and student id is ${this.studentId}`
//     }
//     getgreeting(){
//         return `My Name is ${this.name}. I am ${this.age} Years old. And Student ID is ${this.studentId}`;
//     }
// }
//     let finalStudent = new Student("Anamika", 24, "0903123456");
//     console.log(finalStudent.getStudent());
//     // console.log(Person.getgreeting());
//     console.log(finalStudent.getgreeting());


// Activity - 3: Static Methods And Properties
// Task - 5


// class Person{
//     constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     }

//     getgreeting() {
//         return `My Name is ${this.name}. I am ${this.age} Years old`;
//     }

//     static genericgreetingmessage(){
//         return "Good Morning"
//     }

//     }

//     console.log(Person.genericgreetingmessage());
//     // console.log(Person.getgreeting());



// Task - 6
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }

//     static genericGreeting() {
//         return 'Hello, this is a generic greeting.';
//     }
// }

// console.log(Person.genericGreeting());
// class Student extends Person{
//     static numberofstudent = 0;
//     constructor(name, age, studentId){
//         super(name, age);
//         this.studentId = studentId;
//         Student.numberofstudent++;
//         console.log(`Total Number of student: ${Student.numberofstudent}`);
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.studentid is ${this.studentId}`;
//     }
//     getStudentId(){
//         return this.studentId
//     }
// }
// const student1 = new Student("Anu Gupta", 20, 21121 );
// const student2 = new Student("manu Gupta", 20, 21121 );
// console.log(student1);
// console.log(student2);


// Activity - 4: Getters and Setters
//Task -7  
// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         }
//     get getfullName(){
//         return (this.firstName +" " +this.lastName);
//     }
// };
// let val = new Person("Anuj", "Gupta")
// console.log(val.getfullName)

// Task - 8
// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         }
//     get getfullName(){
//         return (this.firstName +" " +this.lastName);
//     }
//     set getfullName(name){
//             const [firstName, lastName] = name.split(' ');
//             this.firstName = firstName;
//             this.lastName = lastName;
//     }
// };
// let val = new Person("Anuj", "Gupta")
// console.log(val.getfullName)

// let val1 = new Person("Ankit", "Sharma");
// console.log(val1.firstName, val1.lastName);


// Activity 5: Private Fields
// Task - 9
class Account{
    #balance;
    constructor(intialBalance){
        this.#balance = intialBalance;
    }
    deposit(amount){
        if(amount > 0){
            this.#balance +=amount;
            console.log(`${amount}. ${this.#balance}`);
        } else {
            console.log("Deposit amount is positive");
        }
    }
        
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`${amount}. ${this.#balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }
    getBalance(){
        return this.#balance;
    }
}

// Task 10
const newvalue = new Account(10);
newvalue.deposit(50)
newvalue.withdraw(30)
console.log(`final balance: ${newvalue.getBalance()}`);