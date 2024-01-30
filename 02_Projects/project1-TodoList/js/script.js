const inputText= document.getElementById("todo-input");
const listContainer=document.getElementById("list-container");

function addTodo(){

    if(inputText.value===''){
        alert("Nothing to add");
    }

    else{
      let li=document.createElement('li');
      li.innerHTML=inputText.value;
      listContainer.appendChild(li);
      let span=document.createElement('span');
      span.innerHTML='\u00d7';
      li.appendChild(span);
    }
    inputText.value="";
    saveTask()

}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask()
    }
},false);


function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();