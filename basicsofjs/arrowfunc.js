//one line functions
const add = (a,b) => a+b;
console.log(add(5,10));

//template literals..
let name1="Rishabh";
let age=19;
console.log(`My name is ${name1} and my age is ${age}`);

//spread operator
let arr1=[1,2];
let arr2=[...arr1,3,4]; 
// ... is spread operator. copies and joins the elements. 
console.log(arr2);

// map function...
let nums =[1,2,3,4,5];
let res1=nums.filter(n=> n%2 === 0); //filtering even numbers
console.log(res1);
let res= nums.map(n=>n*2);
console.log(res);
