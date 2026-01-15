let s1="Hello";         //declares a variable s1
let s2="World";         //declares a variable s2
let s3="Node.js Backend";       ////declares a variable s3


console.log(s1);         //prints values of s1 i.e Hello
console.log(s2);         // prints values of s2 i.e World
console.log(s3);         // prints values of s3 i.e Node. js Backend

//string length
let text ="JavaScript";
console.log("length",text.length);

//Access Characters (Index)
let word="Node";
console.log(word[0]);//N
console.log(word[1]);//o

//toUpperCase()
let name= "aman";
console.log("Upeercase:",name.toUpperCase());

//toLowercase()
let city="DELHI";
console.log("Lowercase:", citytoLowerCase());

//trail()
let msg ="      hello world    ";
console.log("Trimmed:",msg.trim());


// includes()
let sentence="I love JavaScript";
console.log("Includes 'love':", sentence.includes("love"));


//startswith()
let email ="admin@gmail.com";
console.log("Starts with admin",email.startsWith("admin"));


//endsWith()
console.log("Ends with .com",email.endsWith(".com"));


//slice()
let lang ="JavaScript";
console.log("Slice(0,4:",lang.substring(4,10));

// replace()
let greet ="Hello World";
console.log("Replace",greet.replace("world","Node"));

// replaceAll()
let hiText="hi hi hi";
console.log("Replace All:",hiText.replaceAll("hi","hello"));


// split()
let names= "Aman, Ravi, Neha";
let nameArray= names.split(",");
console.log("Split",nameArray);


// concat()
let a="Hello";
let b="World";
console.log("Concat:",a.concat("",b));

//Template literals
let userName= "Aman";
let age =22;
console.log('My name is ${username} and age is ${age}')


//String Comparision
let password="1234"