const firstName = 'Marco';
var today = new Date();
var hourNow = today.getHours();
var greeting;
// these above are called statments 

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}
// these above are called code blocks

alert(greeting + ' ' + firstName);

// this alert is an action that will occur giving the results from above 
// we concat the greeting with the first name variable

// document.write('<h3>' + greeting + '</h3>');


// making an array of colors below
var colors;
colors = ['Red', 'Blue', 'Yellow', 'Green'];
console.log(colors[2]);

// next section will cover functions 
function sayHello() {
    console.log("Hello!");
}
sayHello();
