//-----------------bai 1--------------
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };
console.log(person.name);
console.log(person["name"]);
const {name:nameperson} =person;
console.log(nameperson);
//-----------------bai 2--------------
let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
var arr = Object.keys(obj)
const arr1 = arr.map(x => x.toUpperCase()) 
console.log(arr1);  
//-----------------bai 3--------------

function family(quantity,member,location){
    this.quantity = quantity;
    this.member = member;
    this.location=location;
} 
family.prototype.hobbies= "travel"
let myFamily = new family(4, ["Dad", "Mom", "Me", "Daughter"],"Vietnam")
console.log(myFamily.hobbies);
//-----------------bai 4--------------
let obj1 = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };
//  obj1.bar[3].xyz= 606
obj1["bar"][3]["xyz"] =606
console.log(obj1);




