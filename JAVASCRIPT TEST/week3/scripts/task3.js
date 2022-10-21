/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add (number1, number2){
// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers (){
const add1 = document.getElementById("addend1");
const add2 = document.getElementById("addend2");
let add3 = add(add1, add2);
// Step 4: Assign the return value to an HTML form element with an ID of sum
document.getElementById("sum").innerHTML = add3;
 
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttomAdd = document.getElementById("addNumbers");
buttomAdd.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2) {return number1 - number2;}
const subtractNumbers = function() {
let minu = document.getElementById("minuend");
let subtrah = document.getElementById("subtrahend");
const subtracts = subtract(minu, subtrah);
document.getElementById("difference").innerHTML = subtracts;

}  
const buttomSub = document.getElementById("subtractNumbers");
buttomSub.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2;
const mulitplyNumbers = () => {
let factor1 = document.getElementById("factor1");
let factor2 = document.getElementById("factor2");
let multi = multiply(factor1, factor2);
document.getElementById("product").innerHTML = multi;

} 
const buttomMulti =  document.getElementById("multiplyNumbers");
buttomMulti.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
let dividend = document.getElementById("dividend");
let divisor = document.getElementById("divisor");
const div = divide(dividend, divisor);
document.getElementById("quotient").innerHTML = div;

}
const buttomDiv = document.getElementById("divideNumbers");
buttomDiv.addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let d = new Date();
// Step 2: Declare a variable to hold the current year
let cYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
cYear = d.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = cYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 , 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numbers;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = numbers.filter(odd => odd % 2);
document.getElementById("odds").innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbers.filter(evenNum => evenNum % 2 == 0);
document.getElementById("evens").innerHTML = evenNumbers;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const firstValue = 0;
let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, firstValue);
document.getElementById("sumOfArray").innerHTML = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const map = numbers.map(x => x * 2);
document.getElementById("multiplied").innerHTML = map;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumMap = map.reduce((previousValue, currentValue) => previousValue + currentValue, firstValue);
document.getElementById("sumOfMultiplied").innerHTML = sumMap;