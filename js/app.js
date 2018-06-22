// 'use strict';

// //wolf is the object
// var wolf = {
//   //key value pairs: name is key, value is Gray
//   name: 'Gray',
//   packNum: 9,
//   gender: 'female',
//   age: 7,
//   territory: 'North Cascades',
//   alpha: true,
//   yellowEyes: true,
//   family: {
//     mate: {
//       name: 'Black',
//     },
//     pups: ['Larry',
//       'Curly',
//       'Mo'
//     ]
//   },
//   speak: function () {
//     console.log('Howl, my name is ' + wolf.name + ' and I like to roam around in the ' + wolf.territory + '.');
//   }

// };
// wolf.speak();

// //this is a getter using dot notation to access, dot notation is more popular
// console.log(wolf.age);

// //if I want to add a pup I can access the pup array using dot notation 
// //wolf.family.pups.push('Summer'); 

// //////////////////////////////

// //these are notes for your co-working session to help you get started
// //consider using math.random(); look that up in MDN

// var pike = {
//   min: 3,
//   max: 9,
//   avg: 6.1,
//   getRandom: function (min, max) {
//     return Math.random() * (max - min) + min;
//   }
// }

// pikePlace.getRandom(pikePlace.min, pikePlace.max)

//1.) Create one object literal that will aggregate data, generate for each hour a number of cookies that need to be baked.
//2.) Once you have that data you will populate your DOM dynamically
//3.) With that data you'll create an unordered list.
//4.) You'll write a final method on the object literal called render and that will populate your data in the browser with DOM manipulation.
//5.) document.createElement(''); it takes a string argument that is the element that we want to create 

// example 
// var h1El = document.createElement('h1') creates an element with js but havent' attached it to the browser
//latch onto any id name

// DOM Interactions
// These are the most used and common methods for interacting with the DOM:
//     Getters: // Document or element methods:
//     document.getElementById(); //returns a single element;
// document.getElementsByClassName(); //returns an array of elements with same class;
// document.getElementsByTagName(); //returns an array of elements by tag;
// document.querySelectorAll(some css shiz) //returns an array of element nodes.
// Elements:
// document.createElement('div') //returns a new 'div' element with the provided string.
// element.children //returns all of the element's children with their own corresponding children.
// element.parentElement // refers to the element's parent element.
// element.appendChild(element) //puts the element arg and pushes it to the end of its children.
// element.removeChild(child element) //takes in the child element node to remove.
// element.insertBefore(new element, existing element); //inserts a new element before the 2nd parameter.
// Steps:
// Make a JavaScript reference(a variable) to the parent element
// Create the child element we want to add and save it as a variable
// Give the child content - in this case, the content is text
// Append the child to the parent

'use strict';
//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionlity that the machine adds to the objects 

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them
var allLocations = [];
//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal or netTotal
var totalTotal = 0;
//constructor function begin with an Uppercase letter

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
  //a function called MakeLocation will be a template for creating new objects that represent other locations
  //the statements in this function add properties and or methods to the objects
  //the this keyword is used instead of the object name to indicate that the property or method belongs to the object that this function creates
  //this function has four parameters and each one sets the value of a peroperty in the object
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
  //why is this an array??
  this.randCustByHour = [];
  this.avgCookiesSoldPerHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  //this.calcRandCustByHour = function() {
  //methods go here
  //use prototypes
  // }
}
//remember to call the methods in the constructor that are now prototypes available to the new objects that the constructor will make using MakeLocation 
//this.calcRandCustByHour();

//call the function in a function if you want
//this constructor function creates four new objects with their own unique values in properties of this object( name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour)
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  //make one for each store...instantiate 
};
makeStands();

//time to create the table in javascript not html : ) 
//make header row
//table needs an id in html 

function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
}
//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild
//create a th element
//give the th element text content 'Daily Location Total'
//append child
//remember to call makeHeaderRow();