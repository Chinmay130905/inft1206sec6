console.log("Hello!!");
// Create objects - using literal notation

let person1 = {
    firstName : "Chinmay",
    "last name" : "Singh",
    Age : 19,
    lastAccess: new Date(),
    address : {streetNumber: 2000, streetName: "Simcoe St", city: "Oshawa"},
    print: function(){console.log(`The name is ${this.firstName} ${this['last name']} and the age is ${this.age}`)}
    
};

console.log(person1.firstName.lastName); //Kaivan
console.log(person1["firstName"]);
console.log(person1["last name"]); //Shah
console.log(person1.Age); //19
person1.Age = 22;
console.log(person1.Age); //22
console.log(person1.lastAccess);

console.log(person1.address.city)
person1.print();

person1.height = "176 cm";

console.log(person1.height);

// Create Objects - using function Constructor

function person2(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.lastAccess = new Data();
    this.print = function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)};

}

let p1 = new PersonV2('Sam','Tom',34);
let p2 = new PersonV2('Sam','Tom',10);

let p3 = new PersonV2();

console.log(p1.firstName);//Sam
p1.print();
p2.print();
p3.print();

PersonV2.prototype.height = "166 cm";

console.log(p1.height);//166cm
console.log(p2.height);//166cm
console.log(p3.height);//166cm

p2.height = "222 cm";

console.log(p1.height);//166cm
console.log(p2.height);//166cm
console.log(p3.height);//166cm

// Create Object using classes

class PersonV3{
    firstName;
    lastName;
    age;
    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print(){
        console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)
    }
}

let p4 = new PersonV3("Max", "Alex", 14)

p4.print();
console.log(p4.firstName);

let s1 = new Student("DD", "MM", 23, 88);
s1.print();
console.log(s1.grade);