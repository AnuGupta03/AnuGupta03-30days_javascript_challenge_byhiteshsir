// Activity 1: Function Declaration
// Task 1: Function Declaration
// function value(num){
//     if(num%2 == 0){
//         console.log("Nmber is even");
//     } else {
//         console.log('Number is odd');
//     }
// }
// value(5)

// Task 2:
// function value(num){
//     return num*num
// }
// console.log(value(9));

// Activity 2: Function Expression
// Task 3:
// var myfun  = function(num1, num2){
//     if(num1 > num2){
//         console.log("num1 is larger then num2");
//     } else {
//         console.log("num2 is larger then num1");
//     }
// }
// myfun(100, 20);

// Task 4:
// let newvar = function(value1, value2){
//     return value1 +"  " +value2
// }
// console.log(newvar("Anuradha", "Gupta"));

// Activity 3: Arrow Functions
// Task 5:
// let newvar = (value1, value2) =>{
//     return value1 +value2
// }
// console.log(newvar(10, 20));

// Task 6:
// let newvalue = (value1, char) =>{
//     return value1.includes(char)
// }
// console.log(newvalue("Anuradha", "A"));
// console.log(newvalue("Anuradha", "Z"));

// Activity 4: Function Parameters and Default Values
// Task 7: 
// function newfunc(value1, value2=10){
//     return value1*value2
// }
// console.log(newfunc(20, 40));
// console.log(newfunc(20));

// Task 8:
// function newfunc(name, age, messages = "Good Evening"){
//     return {name, age, messages};
// }
// console.log(newfunc("Anuradha", "26"));

// Activity 5: Higher Order Functions
// Task 9: 
// const newvalue = (func, times) =>{
//     for(let i =0; i<times; i++){
//         func();
//     }
// }
// const sayHello = () => {
//     console.log("Hello");
// }
// newvalue(sayHello, 5)

// Task 10:
// const applyFunctions = (func1, func2, value) => {
//     const result1 = func1(value);
//     const result2 = func2(result1);
//     return result2;
// };

// // Example usage
// const multiplyBy2 = (num) => num * 2;
// const add3 = (num) => num + 3;

// const result = applyFunctions(multiplyBy2, add3, 5); // (5 * 2) + 3 = 13
// console.log(result); // 13
