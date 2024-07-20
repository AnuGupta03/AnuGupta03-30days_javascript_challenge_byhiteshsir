// Activity 1:
// Task 1:
// let num = 0
// if(num > 0 ){
//     console.log("Positive Value");
// } else if (num < 0 ) {
//     console.log("Nagitive Value");
// } else{
//     console.log("Number is Zero");
// }

// Task 2:
// let age = 16;
// if (age > 18){
//     console.log("You Can eligible to vote");
// } else {
//     console.log("Not Eligible for vote");
// }

// Activity 2:
// Task 3:
// let num1 = 55;
// let num2 = 35;
// let num3 = 45;
// if (num1 > num2 && num1 > num3){
//     console.log(`${num1} num1 is the largest value`);
// } else if (num2 > num1 && num2 > num3){
//     console.log(`${num2} num2 is the largest value`);
// } else {
//     console.log(`${num3} num3 is the largest value`);
// }

// Activity 3: Switch Case
// Task 4:
// let day = 5;
// switch (day) {
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wenesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     case 7:
//         day = "Sunday";
//         break;
// }
// console.log(day);

// Task 5

// let marks = 50;
// function gradeteller(marks){
//     let grade;
// switch(true){
//     case (90 <= marks && 100>=marks):
//     console.log("grade = A");
//     break;
//     case (80 <= marks && 90>=marks):
//     console.log("grade = b");
//     break;
//     case (60 <= marks && 80>=marks):
//     console.log("grade = c");
//     break;
//     case (40 <= marks && 60>=marks):
//     console.log("grade = D");
//     break;
//     case (20 <= marks && 40>=marks):
//     console.log("Fail");
//     break;
// }
// }
// gradeteller(20);

// Activity 4: Conditionla(Ternary) Operator
// Task 6:

// let num;
// function newfun(num){
// let newnum = num % 2==0 ? "Even" : "Odd";
// console.log(newnum);
// }
// newfun(55);
// newfun(20);

// Activity 5: Combining Conditions
// Task 7: 

function yearfun(years){
    if(years % 4 === 0 && years % 100 !== 0 || years % 400 === 0){
        console.log("Year is leap year");
    }  else {
        console.log("Year is not a leap year");
    }
};

yearfun(2060);
yearfun(2017);


