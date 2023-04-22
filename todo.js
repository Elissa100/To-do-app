const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('Write some task please')
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let sp = document.createElement("span");
        sp.innerHTML = "\u00d7";

        li.appendChild(sp);
        

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(l){
    if(l.target.tagName === "LI"){
        l.target.classList.toggle("checked");
        saveData();
    } else if(l.target.tagName === "SPAN"){
      l.target.parentElement.remove();
      saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML)
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();