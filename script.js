let btn = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let counter = document.getElementById("count");
let task_completed = document.getElementById("task_completed");
let count = 0;
btn.addEventListener("click", function () {
  var list = document.createElement("P");

  list.className = "ul1";
 
  count += 1;
  counter.innerText  = "Total Tasks:" + count;
  
  list.innerText = inputField.value;
 

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); // \u00D7
  span.className = "close";
  span.appendChild(txt);
  list.setAttribute("background-color", "white");

  if (inputField.value != "") {
    list.appendChild(span);
  }
  
  container.appendChild(list);
  inputField.value = "";
  var check = false;
  
  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
 
  });
  list.addEventListener("dblclick", function () {
    list.style.textDecoration = "none";
  });





  span.addEventListener("click", function () {
    var div = this.parentElement;
    div.style.display = "none";
    count = count -1;
    counter.innerText  = "Total Tasks:" + count;
    console.log(count);
    
  });
 
  
});




