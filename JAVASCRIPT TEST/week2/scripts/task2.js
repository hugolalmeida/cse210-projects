/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name


const myname = "Hugo L. ALmeida";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

// document.querySelector("#name").innerHTML = "Hugo L. ALmeida;"
// document.getElementById("name").textContent = "Hugo L. ALmeida";
document.querySelector("#name").textContent = myname;

// Step 3: declare and instantiate a variable to hold the current year
d = new Date()
let current_year = d.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
// document.querySelector("#year").textContent = current_year;
document.getElementById("year").innerHTML = current_year;
// Step 5: declare and instantiate a variable to hold the name of your picture
let picture_name = 'images/me2.png';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("#mainimage").setAttribute("src", picture_name);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = ['apple', ' orange', ' banana', ' pineapple', ' strawberry'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let other_food = ' grape';

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(other_food);

// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = foods;


