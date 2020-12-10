"use strict";

/* todo webes felület létrehozása
- minden sorban checkbox
- mellette szöveges mező
- minden sorban törlés gomb
- 10 elemes todo ami bővíthető
	- új feladat hozzáadása gomb */
function pageLoaded() {
  var root = document.querySelector("#root"); //we select the root div and call it root

  var todoRow = "<div class=\"todo\"> \n  <input type=\"checkbox\" name=\"\" id=\"\"> \n  <input type=\"text\" name=\"\" id=\"\"> \n  <button class=\"deleteBtn\">delete todo</button> \n  </div>"; //adding the todo rows to html

  var addBtn = "<button class=\"add\">Add new ToDo</button>";
  var itemNumber = 10;

  function deleteRow(e) {
    e.currentTarget.parentNode.remove();
    console.log("button clicked");
  } //fill the html with todo rows


  for (var j = 0; j < itemNumber; j++) {
    root.insertAdjacentHTML("afterbegin", todoRow);
  }

  var deleteBtns = document.querySelectorAll(".deleteBtn"); //select all the delete buttons
  //give all the delete buttons function to delete row

  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteRow);
  } //adding the new row button to the root div


  root.insertAdjacentHTML("afterend", addBtn);

  function addNew() {
    root.insertAdjacentHTML("beforeend", todoRow); //TODO add click listener to new elements
  }

  document.querySelector(".add").addEventListener("click", addNew);
}

window.addEventListener("load", pageLoaded);