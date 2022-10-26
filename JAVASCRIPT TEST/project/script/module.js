const getInput = document.querySelector("input");
const getButton = document.querySelector("button");
const getList = document.querySelector(".list");
const itemListLen = document.getElementById("itens");
const list = []
getButton.addEventListener('click', function(){
    const myItem = getInput.value;
    getInput.value = "";

    const listItens = document.createElement("li");
    // const listText = document.createElement('span');
    const delButton = document.createElement("button");
    listItens.innerHTML = myItem;
    list.push(myItem);
    // listItens.appendChild(listText);
    // listText.textContent = myItem;
    delButton.textContent = "❌";
    listItens.appendChild(delButton);
    getList.appendChild(listItens);

    delButton.addEventListener('click', function(){
        getList.removeChild(listItens);
        list.pop();
        itemListLen.textContent = list.length;
    })
    getInput.focus();
    itemListLen.textContent = list.length;
});
