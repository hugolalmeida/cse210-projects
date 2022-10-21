const url = "https://run.mocky.io/v3/c4718f1b-c9c4-43e9-b868-4c59b87f7861"

const getInput = document.querySelector("input");
const getButton = document.querySelector("button");
const getList = document.querySelector(".list");

async function getFruit(url, string) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      doStuff(data, string);
    }
}
function doStuff(data, string) {
    results = data;
    const outputElement = document.querySelector("#output");
    const html = `<h2>${string}</h2><p>${data.logia.explanation}</p><p>${data.logia.fruits}</p>`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }

getButton.addEventListener('click', function(){
    const myItem = getInput.value;
    getInput.value = "";
    if (myItem === "logia"){
        getFruit(url, "Logia")
    }
    else if (myItem === "paramecia"){
        getFruit(url, "Paramecia")
    }
    else if (myItem === "zoan"){
        getFruit(url, "Zoan")
    }

    // const listItens = document.createElement("li");
    // // const listText = document.createElement('span');
    // const delButton = document.createElement("button");
    // listItens.innerHTML = myItem;
    // // listItens.appendChild(listText);
    // // listText.textContent = myItem;
    // delButton.textContent = "❌";
    // listItens.appendChild(delButton);
    // getList.appendChild(listItens);

    // delButton.addEventListener('click', function(){
    //     getList.removeChild(listItens);
    // })
    getInput.focus();

});
