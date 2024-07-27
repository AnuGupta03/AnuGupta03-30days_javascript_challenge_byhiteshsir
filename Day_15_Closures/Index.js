// Activity 1: Understanding Closures
// Task -1:
// function outerfunction(num1, num2){
//     num3 = num1+num2
//     function innerfunction(){
//         console.log(num3);
//     }
//     innerfunction();
// }
// outerfunction(10, 20);


// Task - 2:
// function outerfunction(){
//     let num = 1;
//     return {
//         increment: function(){
//             num++;
//         },
//         getValue: function(){
//             return num;
//         }
//     };
// }
// let func = outerfunction()
// func.increment();
// console.log(func.getValue());
// func.increment();
// console.log(func.getValue());
// func.increment();
// console.log(func.getValue());
// func.increment();
// console.log(func.getValue());
// func.increment();
// console.log(func.getValue());


// Activity - 2: Practical Closures
// Task -3 
// function outerfun(){
//     let uniqueval = Math.floor(Math.random() * 100)
//     function innerfunction(){
//         uniqueval++
//         return uniqueval;
//     }
//     return innerfunction;
// }
// let func = outerfun();
// console.log(func());
// console.log(func());
// console.log(func());
// console.log(func());

// Task - 4
// function outerfun(name){
//     function innerfunction(){
//         let value = `${name}, Good Morning`
//         return value;
//     }
//     return innerfunction()
// }
// console.log(outerfun("Anuradha"));
// console.log(outerfun("Achal"));

// Activity - 3: Clsures in Loops
// Task - 5
// function createFunctionArray(){
//     const val = [];
//     for(let i = 0; i<5; i++){
//         val.push((function(Index){
//             return function(){
//                 console.log(Index);
//             }
//         })(i));
//     }
//     return val;
// }
// const val = createFunctionArray();
// for (let j = 0; j < val.length; j++) {
//     val[j](); // This will log 0, then 1, then 2, then 3, then 4
// }

// Activity - 4: Module Pattern
// Task 6:
//     function createItemManager(){
//         let value = [];

//         return {
//             add: function(name){
//                 value.push(name);
//                 return value
//             },

//             remove: function(name){
//                 const index = value.indexOf(name);
//                 if(index > -1){
//                     value.splice(index, 1);
//                 }
//             },
//             listitem: function(){
//                 return value
//             }
//         };
//     }
// const finalval = createItemManager();
// finalval.add("Apple");
// finalval.add("Banana");
// console.log(finalval.listitem());
// finalval.remove("Banana");
// console.log(finalval.listitem());


// Activity - 5: Memoization
// Task 7:
function memoize(fn){
        const cache = {};
        return function(...args){
            const key = JSON.stringify(args);
            if(cache[key]!==undefined){
                console.log(`${key}`);
                return cache[key];
            } else {
                const result = fn(...args)
                cache[key] = result;
                return result
            }
        }
}

// Task - 7:
function factorial(n){
    if(n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}
const memofac = memoize(factorial);
console.log(memofac(5));