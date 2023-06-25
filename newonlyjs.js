
/*
console.log("Hello Rajendra");
var a=10;
var b=200;
var c=a+b;
console.log(c);
// document.write("Addition of 10 and 20 = ");
let _ = 10,__ = 20;
var ___ = _ + __;
//document.write(___);
//document.writeln("\n");
console.log(___);

//  // Subtraction
// //  document.writeln("Subtraction of 10 and 20 = \n");
var a = 10,b = 20;
var c = a-b;
console.log(c);

//  // multiplication 
// //  document.writeln("multiplication  of 10 and 20 = \n ");
let q = 10,w = 20;
var e= q*w;
console.log(e);

//   // Division  
// //  document.writeln("divison of 10 and 20 = ");
let r = 10, l = 20;
var p= r/l;
console.log(p);

// alert(typeof e);

// alert("hello ${___}");
// alert('hello ${___}')
// alert(`hello ${___}`)

let Var=10;
console.log(Var);
let n=prompt()
let person = prompt("Please enter your name", "Harry Potter");
// let a=prompt("enter number ?")
a=Number.parseInt(a)
//let b=prompt("enter number ?")
b=Number.parseInt(b)
var c=a+b;
console.log(c); */
var a = `hello
as   it
world`+ `<br>` + `hello`;
console.log(a);

abc= 5+4+"1"
console.log(typeof(abc))

for(var i=0; i<10;i++)
{
    console.log(i)
}
console.log(i)

//global
var a=10;
{
    var a=20
    console.log(a)
}
console.log(a)

//local
let ab=10;
{
    let ab=20
    console.log(ab)
}
console.log(ab)


//array
const arr =["Rajendra ", "BTech" ,"RSCOE","Pune"]
arr[0]="Raj"
arr.push("name")
console.log(arr)

//dictionary 
const abb={"class" :"cp", "week":2,"lang":"javascript"}
abb.class="CP";  
abb.lect=7
console.log(abb)


/*
operators 
1. Arithmetic 
2. Assignment
3. Compar/Rela
4.logiccal
5.bitwise
6.ternary
7.other
*/

var age=prompt("Enter Age");
if(age>18)
{
    alert("you are eligible to vote ");
}
else{
    alert("not allowed");
}