// <!-- Activity - 1: Creating and Exporting Modules -->
// <!-- Task - 1 -->

// function adds(num1, num2){
//     return num1 + num2;
// }
// module.exports = adds;

// Task - 2

// let person = {
//     Name: "Anuj Kumar Gupta",
//     age: 25,
//     SchoolName: function(){
//         console.log(this.Name, this.age);
//     },
//     CollegeName: function(){
//         this.age += 1;
//         console.log(this.Name, this.age);
//    }    
// };
// module.exports = person;

// Activity 2: Named and Default Exports
// Task: 3

// function addnum(num1, num2){
//     return num1 + num2;
// }

// function multiplynum(num1, num2){
//     return num1 * num2;
// }

// function dividenum(num1, num2){
//     return num1 / num2;
// }

// module.exports = {addnum, multiplynum, dividenum};


// Task: 4
// function adds(num1, num2){
//     return num1 + num2;
// }
// export default adds;

// Activity - 3: Importing Entire Modules
// Task - 5:


// function val1(num1, num2){
//     console.log(num1+num2);
// }
// function val2(num3, num4){
//     console.log(num3 -num4);
// }

// const val3 = "Anuj Gupta";

// module.exports = {
//         val1,
//         val2,
//         val3,
// }



// Activity - 4: Using Third-Party Modules
// Task - 6:
// const _ = require("lodash");
// let gfg = _.after(3, function (){
//     console.log("Saved");
// })
// gfg();
// gfg();
// gfg();


// Task - 7:
// const axios = require('axios');
// axios.get("https://www.npmjs.com/package/lodash")
// .then(response => {
//     console.log(response.data);
// })
// .catch (error => {
//     console.log(error);
// })

// Task - 8
export function add(a, b){
    return a + b;
}

