//Day 1
// --------------------------------
// function logger(log){
//     console.log(log);
// }

// logger('Message...');

// --------------------------------
// const logger = function(log){
//     console.log(log);
// }

// logger('Message...');

// --------------------------------
// const logger = (log) => {
//     console.log(log);
// }

// logger('Message...');

// --------------------------------
// const sum = (a, b) =>{
//     return a + b;
// }

// console.log(sum(2 ,2));

// --------------------------------
// const sum = (a, b) => a + b;

// console.log(sum(2 ,2));

// --------------------------------
// const sum = (a, b) => {
//     return {
//         a : a,
//         b :b
//     };
// }

// console.log(sum(2 ,2));

// --------------------------------
// const sum = (a, b) => ({ a: a, b: b})

// console.log(sum(2 ,2));

// --------------------------------
// const logg = (log) => console.log(log);

// logg('Message...');

// --------------------------------
// const course = {
//     name: 'CauBa',
//     getName: function() {
//         return this.name;
//     }
// };

// console.log(course.getName());

// --------------------------------
// const Course = function(name , price){
//     this.name = name;
//     this.price = price;
// }

// const JsCourse = new Course('CauBa', 23);
// console.log(JsCourse);

//Day 2
// import module from './module.js';
// import * as constrants from './constants.js';

// // console.log(module)
// module('Lỗi rồi duma...!', constrants.TYPE_LOG);
// module('Lỗi rồi duma...!', constrants.TYPE_WARN);
// module('Lỗi rồi duma...!', constrants.TYPE_ERROR);
// console.log(constrants);

//Day 3
// var name = 'CauBa';
// var price = 2002;

// var course = {
//     name,
//     price,
//     // getName: function(){
//     //     return name;
//     // }
//     getName(){
//         return name;
//     }
// };

// console.log(course.getName())

// --------------------------------
// var fieldName = 'name';
// var fieldPrice = 'price';

// var course = {
//     [fieldName]: 'CauBa',
//     [fieldPrice]: 2002,
// }

// console.log(course.getName)

//Day 4
// function logger(obj){
//     console.log(obj.name);
//     console.log(obj.price);
// }

// function logger ({name, price, ...rest}){
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger({
//     name: 'CauBa',
//     price: 2002,
//     month: 8,
//     day: 9,
//     description: 'Description content',
// });

// function hey([a ,b, ...params]) {
//     console.log(a);
//     console.log(b);
//     console.log(params); 
// };

// hey([2 ,6, 14, 112, 53, 64]);

//Spread
// var list1 = ['hello', 'hi']
// var list2 = ['ba', 'bốn', 'năm']
// var list3 = [...list1 , ...list2]
// console.log(list3);

// var object1 = {
//     name: 'CauBa',
//     born: 2002,
// };

// var object2 = {
//     born: 2000
// };

// var object3 = {
//     ...object1,
//     ...object2
// };

// console.log(object3);

var array = ['Hello', 'Hi', 'Hey'];

function logger(...rest){
    for(var i = 0; i< rest.length; i++){
        console.log(rest[i]);
    }
}

logger(...array);


