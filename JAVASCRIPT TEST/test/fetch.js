const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}
function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
  });
}
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);

// const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json'

// // Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
// document.getElementById("message1").textContent = message;
// // Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
// document.getElementById("message2").textContent = message1;
// /* FETCH */
// // Step 1: Declare a global empty array variable to store a list of temples
// const templeList = [];
// // Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// function output(data){
// // - Creates an HTML <article> element
// const article = document.createElement('article');
// // - Creates an HTML <h3> element and add the temple's templeName property to it
// const subtitle = document.createElement('h3')
// subtitle = data.templeName;
// // - Creates an HTML <h4> element and add the temple's location property to it
// const subtitle1 = document.createElement('h4')
// subtitle1 = data.location;
// // - Creates an HTML <h4> element and add the temple's dedicated property to it
// const subtitle2 = document.createElement('h4')
// subtitle2 = data.dedicated;
// // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// const templeImg = document.createElement('img');
// templeImg.setAttribute("src", data.imageUrl);
// templeImg.setAttribute("alt", data.templeName);
// // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// article.appendChild(subtitle + subtitle1 + subtitle2 + templeImg);
// // - Appends the <article> element to the HTML element with an ID of temples
// const html = document.getElementById('temples');
// html.innerHTML = article;
// }