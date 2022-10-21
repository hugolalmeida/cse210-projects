/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let d = new Date();
// Step 2: Declare another variable to hold the day of the week
let dweek = null;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dweek = d.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message = "";
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dweek === (1,5)){
    message = "Hang in there!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
message = 'Woohoo!  It is the weekend!'
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message1 = ""
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dweek) {
case dweek = 1:
case dweek = 2:
case dweek = 3:
case dweek = 4:
case dweek = 5:
    message1 = "Hang in there!";
break;
case dweek = 0:
case dweek = 6:
    message1 = 'Woohoo!  It is the weekend!';
break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").textContent = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = message1;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
const templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(list){
list.forEach(data => {  
// - Creates an HTML <article> element
let article = `<article></article>`;
// - Creates an HTML <h3> element and add the temple's templeName property to it
const subtitle = `<h3>${data.templeName}</h3>`;
// - Creates an HTML <h4> element and add the temple's location property to it
const subtitle1 = `<h4>${data.location}</h4>`;
// - Creates an HTML <h4> element and add the temple's dedicated property to it
const subtitle2 = `<h4>${data.dedicated}</h4>`;
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
const templeImg = `<img src="${data.imageUrl}" alt="${data.templeName}">`;
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
article = `<article>${subtitle + subtitle1 + subtitle2 + templeImg} </article>`;
// - Appends the <article> element to the HTML element with an ID of temples
const html = document.getElementById("temples");
html.innerHTML += article;
});
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
const response = await fetch(url);
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
if (response.ok) {    
const data = await response.json();
    templeList.push(data);
}
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
    output(templeList);
}
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
const article = document.getElementById("temples");
article.clear();
}
// Step 8: Declare a function named sortBy that does the following:
function sortBy(){
// - Calls the reset function
reset();
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
const sort = document.getElementById("sortBy");
sort = templeList.sort();
// - Calls the output function passing in the sorted list of temples
output(sort);
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener('change', sortBy());
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
