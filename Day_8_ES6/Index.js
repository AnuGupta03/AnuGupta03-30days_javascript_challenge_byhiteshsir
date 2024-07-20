// Activity 1: Template Literals
// Task 1:
// let name = "Ram"
// let age = 25
// console.log(`${name} ${age}`);


// Task 2:
// let multilinestring = `Hi I am Aman 
// Working as a developper in Meta
// from last 5 years`
// console.log(multilinestring);


// Task 3:
// let newarr = [1, 2, 3, 4, 5]
// let[firstElement, secondElement] = newarr
// console.log(firstElement);
// console.log(secondElement);

// Task 4;
// let newobj = {
//     title: "MS DHoni",
//     author: "Sachin"
// }
// let{title, author} = newobj
// console.log(title);
// console.log(author);

// Activity 3: Spread and Rest Operators
// Task 5:
// let arr = ["Anu", "Manu", "Tanu", " "]
// let newarr = ["Monu", "nancy", "Achal"]
// let finalvalue = [...arr] + [...newarr]
// console.log(finalvalue);

// Task 6:
// function newfunc(...num){
//     let value = 0
//     for(const arg of num){
//         value = value + arg
//     }
//     return value
// }
// console.log(newfunc(10, 20, 30, 40, 50, 80));

// Task 7:
// function newfunc(a, b = 5){
//     return a*b
// }
// console.log(newfunc(10, 20));
// console.log(newfunc(2));

// Task 8:
// let name = "Akash"
// let color = "fair"
// let age = 25
// let collegename = function(){
//     return "Maharana Pratap College of technology";
// };

// let finalvalue = {name, color, age, collegename: collegename()}
// console.log(finalvalue);

// Task 9:
// let lname = "lastname";
// let fullname = {
//     firstname: "Anamika",
//     [lname]: "Jain"
// };
// console.log(fullname.firstname+" "+fullname.lastname); 