let btn = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let count = 0;
btn.addEventListener("click", function () {
  var list = document.createElement("P");
  //list.classList.add("paragraph-styling");
  list.className = "ul1";
 
  count += 1;
  console.log(count);
 
  list.innerText = inputField.value;
 
//  var checkbox = document.createElement("input");
//  checkbox.type = "checkbox";
//  checkbox.value = 1;
//  checkbox.name = "todo[]";
//  checkbox.className="check";
//  list.appendChild(checkbox);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); // \u00D7
  span.className = "close";
  span.appendChild(txt);
  list.setAttribute("list-style-type", "none");
  // paragraph.appendChild(span);
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
    
  });
  

});


