// Functions 

function greeting1(){
    console.log("hello");
}

greeting1();

function greeting2(){
    return"hello";
}

let str = greeting2();

console.log(str);
console.log(greeting2());

function greeting3(name){
    //return "hello"+name
    // return 'hello'+name
    return "hello" + name
}

console.log(greeting3("Chinmay"));


// function expression
let m = sum();
console.log(m);
console.log(typeof(m));

let f = sum;
console.log(typeof(f));
console.log(f(6,10));
f =9;

let f2 = function(){
    return "Good Afternoon";
};
console.log(f2());

// Arrow expression
const f3 = ()=>"Good Afternoon";
console.log(f3());

const sum3 = (num1=0,num2=0)=> num1+num2;
console.log(sum2(2,3));


