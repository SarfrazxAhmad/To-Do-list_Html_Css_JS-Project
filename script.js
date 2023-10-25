const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value ===  ''){
        alert("You must write something !!");
    }
    else
    {
        let li = document.createElement("li");              /*creating a html element */
        li.innerHTML = inputBox.value;                      /*adding text */
        listContainer.appendChild(li);                    /* to show the text */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";                                     /* clear the input value*/
    saveData();
}
listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){                           
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML) 
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
