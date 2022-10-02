var form = document.getElementById("addform");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");


//form submit event
form.addEventListener("submit",addItem);
//delete event
itemList.addEventListener("click",removeItem);
//filter event
filter.addEventListener("keyup",filterItems);


//add item
function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById("item").value;
    //create new li element
    var li= document.createElement("li");
    //add class
    li.className = "list-group-item";
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));  
    
    //create delete button element
    var deleteBtn = document.createElement("button");
    //add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    //appned li to list
    itemList.appendChild(li);  
}


//delete item
function removeItem(e){
    if (e.target.classList.contains("delete")){
      if(confirm("Are you sure?")){
          var li = e.target.parentElement;  //button's parent is li
          itemList.removeChild(li);  //remove that specific child from ul
      }
    }
}


//filter item
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text);
    //get lis
    var items = itemList.getElementsByTagName("li");
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.textContent;
        //console.log(itemName);
        //matching search item with items
        if(itemName.toLowerCase().indexOf(text) != -1){   //if can't find (text) then returns -1
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}








