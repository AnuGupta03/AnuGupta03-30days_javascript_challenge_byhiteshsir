// Activity 1:Basic Recursion
// Task 1: 
// function factorial(num){
//     if(num > 1){
//         return num * factorial(num-1)
//     } else {
//         return 1;
//     }
// }
// let newvalue = factorial(5) 
// console.log(newvalue);




// Task 2:
// function Recursionfunc(num){
//     if(num==0)
//         return 0;
//     if(num==1)
//         return 1
//     return Recursionfunc(num - 1) + Recursionfunc(num-2);
//     }


// console.log(Recursionfunc(2));
// console.log(Recursionfunc(1));




// Activity - 2: Recursion With Arrays
// Task - 3:

// function sumArray(arr, index = 0){
//     if(index >= arr.length){
//         return 0 
//     }
//     return arr[index] + sumArray(arr, index + 1);
// }
// console.log(sumArray([1, 2, 3, 4, 4]));




// Task - 4:
// function findMax(arr, n){
//     if(n == 1){
//         return arr[0];
//     }
//     return Math.max(arr[n-1], findMax(arr, n - 1));
// }
// function getMax(arr){
//     return findMax(arr, arr.length);
// }
// let textcase1 = [1, 2, 3, 9, 4];
// console.log(getMax(textcase1));




// Activity 3: String Manipulation with Recursion
// Task 5: 

// function stringmanipulation(num){
//     if(num === ""){
//         return "";
//     } else {
//         return stringmanipulation(num.substr(1)) + num.charAt(0);
//     }
// }
// console.log(stringmanipulation("Anuradha"));




// Task 6:
// function stringpalindrom(num){
//     if(num.length <= 1){
//         return true;
//     } 
//     if (num.charAt(0) !== num.charAt(num.length - 1)){
//         return false;
//     }
//     return stringpalindrom(num.substring(1, num.length -1));
    
// }
// console.log(stringpalindrom("racecar"));
// console.log(stringpalindrom("Mum"));
// console.log(stringpalindrom("tunnut"));
// console.log(stringpalindrom("kumkum"));




// Activity 4: Recursive Search
// Task 7:
// function binarySearch(arr, target, left = 0, right = arr.length - 1){
//     if(left > right) return - 1;
//     const mid = Math.floor((left + right) / 2);
//     if(arr[mid]  === target) return mid;
//     if(arr[mid] > target) return binarySearch(arr, target, left, mid -1);
//     return binarySearch(arr, target, mid+ 1, right);
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 10));




// Task - 8
// function counttargetelement(num, target, index = 0){
//     if(index >= num.length){
//         return 0;
//     }

//     if(num[index] === target){
//         return 1 + counttargetelement(num, target, index + 1);
//     } else {
//         return counttargetelement(num, target, index+1)
//     }
// }
// console.log(counttargetelement([1, 2, 3, 4, 1, 2, 3, 4, 1], 1));
// console.log(counttargetelement([1, 2, 3, 4, 1, 2, 3, 4, 1], 2));
// console.log(counttargetelement([1, 2, 3, 4, 1, 2, 3, 4, 1], 3));
// console.log(counttargetelement([1, 2, 3, 4, 1, 2, 3, 4, 1], 10));

