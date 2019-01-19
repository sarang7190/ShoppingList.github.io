var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var delbtn = document.querySelectorAll(".delbtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createEventListToggle(li);
	createDeleteBtn(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


li.forEach(function(item,i){
	
	addBtnNextToListItem(i);
	createEventListToggle(item);
})

function createEventListToggle(list){
	list.addEventListener("click", function(){
		list.classList.toggle("done");
		// console.log(item);
	})
}
function addBtnNextToListItem(i){
	createDeleteBtn(li[i]);
}

function createDeleteBtn(list){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	list.appendChild(btn);
	btn.classList.add("delbtn");
}

delbtn.forEach(function(item){
	item.addEventListener("click",function(){
		console.log("click here");
	})
})


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

