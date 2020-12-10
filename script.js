/* todo webes felület létrehozása
- minden sorban checkbox
- mellette szöveges mező
- minden sorban törlés gomb
- 10 elemes todo ami bővíthető
	- új feladat hozzáadása gomb */

function pageLoaded() {
  let root = document.querySelector("#root"); //we select the root div and call it root
  let todoRow = `<div class="todo"> 
  <input type="checkbox" name="" id=""> 
  <input type="text" name="" id=""> 
  <button class="deleteBtn">delete todo</button> 
  </div>`; //adding the todo rows to html
  let addBtn = `<button class="add">Add new ToDo</button>`;
  let itemNumber = 10;

  function deleteRow(e) {
    e.currentTarget.parentNode.remove();
    console.log("button clicked");
  }

  //fill the html with todo rows
  for (let j = 0; j < itemNumber; j++) {
    root.insertAdjacentHTML("afterbegin", todoRow);
  }

  let deleteBtns = document.querySelectorAll(".deleteBtn"); //select all the delete buttons

  //give all the delete buttons function to delete row
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteRow);
  }

  //adding the new row button to the root div
  root.insertAdjacentHTML("afterend", addBtn);

  function addNew() {
    root.insertAdjacentHTML("beforeend", todoRow);
    //TODO add click listener to new elements
  }

  document.querySelector(".add").addEventListener("click", addNew);
}

window.addEventListener("load", pageLoaded);
