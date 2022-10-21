/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
const information = {'name': 'Hugo L. Almeida',
'photo': 'images/me2.png',
'favoriteFoods': ['apple', ' orange', ' banana', ' pineapple', ' strawberry'],
'hobbies': ['videogame', ' sports', ' movies'],
'placesLived': {'place': 'Volta Redonda',
'length': '23'}
}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const myName = document.getElementById("name");
myName.textContent = information.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const photograph = document.getElementById("photo");
photograph.setAttribute("src", information.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photograph.setAttribute("alt", "Me");
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

const favFood = information.favoriteFoods.map((food) => `<li>${food}</li>`);
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById("favorite-foods").innerHTML = favFood.join("");

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbie = information.hobbies.map((itens) => `<li>${itens}</li>`);
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById("hobbies").innerHTML = hobbie.join("");

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
const place =`<dt>${information.placesLived.place}</dt>`;

//didn't work to get the place and length into the array with objects
// const place = information.placesLived.place.map((places) => `<dt>${places}</dt>`)

// - Create an HTML <dd> element and put its length property in the <dd> element
const lengthPlace = `<dd>${information.placesLived.length}</dd>`;

//didn't work to get the place and length into the array with objects
// const lengthPlace = information.placesLived.length.map((lengths) => `<dd>${lengths}</dd>`)

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.getElementById("places-lived").innerHTML = place + lengthPlace;

