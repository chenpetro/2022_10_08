// function User(name, id){
//     this.name = name
//     this.id = id;
//     this.human = true;
//     this.hello = function (){
//         console.log('Hi' + this.name);

//     }
// }

// let oleg = new User ("Oleg", 30)
// let petro = new User ("Petro", 40)

// console.log(oleg);
// console.log(petro);

// class User  {
//     constructor(name, id) {
//         this.name = name
//         this.id = id;
//         this.human = true
//     }
//     hello(){
//         console.log(`'Hi' ${this.name}`);

//     }
// }

// "use strict"

// function show (num1, num2) {
//     console.log(this);

//     function sum(){
//         console.log(this);
//         // return this.num1 + this.num2
//         return num1 + num2
//     }
//     console.log(sum());

// }
// show(2, 3)

// let user = {
//     name: "Oleg",
//     age: 24,
//     sayHi () {
//         // console.log(`Hello ` + user.name);
//         console.log(`Hello ` + this.name);
//     },
//     sayhiTwo: funcion (){

//     }
// // }

// // user.sayHi()
// // console.log(user);

// function calc (a, b){
//     return a+b
// }

// console.log(calc(2, 5));

///////////////////////////////////////////////////15 10 2022

// class Rectangle {
//     constructor(height, width = 10, color){
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     calcArea(){
//         return this.height * this.width + this.color
//     }
// }

// const square = new Rectangle(5, 5, " red")
// console.log(square.calcArea());

// const square2 = new Rectangle(15, 15, " blue")
// console.log(square2.calcArea());

//////////////////////////////////////////////////////////////////////

// let fruits = ['apple', 'orange', 'tomato'];
// let user = ['Ivan', 'Petro', 'Oleh'];
// let colors = ['red', 'blue', 'green'];

// //spread
// let result = [...fruits, ...user, ...colors, 55, "square"]

// console.log(result);

/////////////////////////////////////////////////////////////////////

// localStorage.setItem("name", "Petro")
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name")
// localStorage.clear()

////////////////////////////////////////////////////////////////////

// window.addEventListener("DOMContentLoaded", function () {
//   const checkbox = document.getElementById("checkBox");
//   if (this.localStorage.getItem("isChecked" === "true")) {
//     checkbox.checked = true;
//   }

//   console.log(checkbox);
//   checkbox.addEventListener("click", function () {
//     console.log("ok");
//     localStorage.setItem("isChecked", true);
//   })
//   if (checkbox.checked == true) {
//     document.body.style.backgroundColor = "red";
//   }

// });

////////////////////////////////////////////////////////////////////
// Javascript Object Notation

// let options ={
//   width: 1200,
//   height: 600,
//   backgroung: "blue",
//   font: {
//     size: '22px',
//     fontWeight: 'blue'
//   }
// }
// console.log(options);
// let json = JSON.stringify(options);

// let resultJson = JSON.parse(json)
// console.log(json);
// console.log(resultJson);

// ajax asynchronous java script and xml 

//////////////////////////////////////////////////////

// get - to get data
// post - to send data to the server
// put - refresh existing data on the server
// delete
// head - similar to get

// Server statuses: 
// 1) info 100-199, 
// 2) Success 200-299, 
// 3) Redirection 300-399
// 4) Error when request was successful but the needed data wasn´t found 400-499
// 5) Server error 500-599


// ReadyState 0 - method "open" hasn´t been called yet
// ReadyState 1 - method "open" has been called
// ReadyState 2 - method "sent" has been called
// ReadyState 3 - method "responseText" has some data
// ReadyState 4 - done, everything has been performed successfully 


const inputGrn = document.getElementById('grn') 
const inputUsd = document.getElementById('usd') 

inputGrn.addEventListener('input', () => {
let request = new XMLHttpRequest();
// request.open(method, url, async, login, password);
request.open('GET', 'currency.json');
request.setRequestHeader('Content-type', 'application/json, charset=utf-8');
request.send();

// responseText // response

// readyState 

request.addEventListener('readystatechange', function(){
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.response);
    console.log(data); 
    inputUsd.value = inputGrn.value / data.usd;
  }
})


})

//57 min Web Angular 101 Lesson 3 22 10