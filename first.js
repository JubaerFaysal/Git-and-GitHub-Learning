// let a=["java","c++","python"];
// let b=["html","css","js"];

// b=a;

// console.log(a);
// console.log(b);

// a.push("sql");

// console.log(a);
// console.log(b);

// b.push("react");

// console.log(a);
// console.log(b);

// let fruits=["apple","banana","grapes"];

// let ff=[];

// fruits.find((f)=>{
//     if(f==="apple")ff.push(f);
// });
// console.log(ff);

let num=[1,2,3,4,5,6,7,8,9];

const result=num.reduce((total,currVal)=>(
    total+currVal),0)

console.log(result);

let user = {
    name: "john",
    age: 30,
    city: "new york",
    car:"BMW"
}