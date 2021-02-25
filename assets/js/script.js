var divToEdit;

function addToDo(){
	if (!document.getElementById("titleInput").value.trim().length) return alert('Input title');

	var todosDiv = document.getElementById("todos");

	var div = document.createElement("div");
	div.setAttribute("class", "todos__task");

	var title = document.createElement("h3");
	title.setAttribute("class", "todos__task-title");
	var titleText = document.createTextNode(document.getElementById("titleInput").value);
	title.appendChild(titleText);

	var desc = document.createElement("p");
	desc.setAttribute("class", "todos__task-description");
	var descText = document.createTextNode(document.getElementById("descInput").value);
	desc.appendChild(descText);

	var time = document.createElement("p");
	time.appendChild(document.createTextNode(new Date(Date.now()).toLocaleDateString()));

	var editButton = document.createElement("a");
	editButton.setAttribute("class", "todos__edit-btn");
	editButton.setAttribute("id", Date.now());
	editButton.setAttribute("onclick", "modalActionOnEdit()");

	var delButton = document.createElement("a");
	delButton.setAttribute("class", "todos__close-btn");
	delButton.setAttribute("id", Date.now());
	delButton.setAttribute("onclick", "closeToDo()");

	var buttonsWrapper = document.createElement("div");
	buttonsWrapper.setAttribute("class", "todos__footer");
	buttonsWrapper.appendChild(time);
	buttonsWrapper.appendChild(editButton);
	buttonsWrapper.appendChild(delButton);



	div.appendChild(title);
	div.appendChild(desc);
	div.appendChild(buttonsWrapper);
	todosDiv.appendChild(div);

	closeModal();
	clearModal();
}


function editToDo() {
	if (!document.getElementById("titleInput").value.trim().length) return alert('Input title');

	divToEdit.innerHTML = '';

	var title = document.createElement("h3");
	title.setAttribute("class", "todos__task-title")
	var titleText = document.createTextNode(document.getElementById("titleInput").value);
	title.appendChild(titleText);

	var desc = document.createElement("p");
	desc.setAttribute("class", "todos__task-description");
	var descText = document.createTextNode(document.getElementById("descInput").value);
	desc.appendChild(descText);

	var time = document.createElement("p");
	time.appendChild(document.createTextNode(new Date(Date.now()).toLocaleDateString()));

	var editButton = document.createElement("a");
	editButton.setAttribute("class", "todos__edit-btn");
	editButton.setAttribute("id", Date.now());
	editButton.setAttribute("onclick", "modalActionOnEdit()");

	var delButton = document.createElement("a");
	delButton.setAttribute("class", "todos__close-btn");
	delButton.setAttribute("id", Date.now());
	delButton.setAttribute("onclick", "closeToDo()");

	var buttonsWrapper = document.createElement("div");
	buttonsWrapper.setAttribute("class", "todos__footer");
	buttonsWrapper.appendChild(time);
	buttonsWrapper.appendChild(editButton);
	buttonsWrapper.appendChild(delButton);

	divToEdit.appendChild(title);
	divToEdit.appendChild(desc);
	divToEdit.appendChild(buttonsWrapper);
	
	closeModal();
	clearModal();
}


function modalActionOnEdit() {
	var btn = document.getElementById("editBtn");
	btn.style.display = "block";

	divToEdit = document.getElementById(event.srcElement.id).parentElement.parentElement;
	var title = divToEdit.getElementsByClassName("todos__task-title")[0].innerText;
	var desc = divToEdit.getElementsByClassName("todos__task-description")[0].innerText;

	var modal = document.getElementById("myModal");

	var titleModal = document.getElementById("titleInput");
	titleModal.value = title;
	var descModal = document.getElementById("descInput");
	descModal.value = desc;

	modal.style.display = "block";

	var span = document.getElementsByClassName("modal-close")[0];
	span.onclick = function() {
		closeModal();
		clearModal();
	}

}


function modalAction(){
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("addBtn");
	modal.style.display = "block";
	btn.style.display = "block";

	var span = document.getElementsByClassName("modal-close")[0];
	span.onclick = function() {
		closeModal();
		clearModal();
	}
}


function closeModal() {
	var modal = document.getElementById("myModal");
	var addBtn = document.getElementById("addBtn");
	var editBtn = document.getElementById("editBtn");

	modal.style.display = "none";
	addBtn.style.display = "none";
	editBtn.style.display = "none";
}


function clearModal() {
	document.getElementById("titleInput").value = "";
	document.getElementById("descInput").value = "";
	divToEdit = "";

}


function closeToDo() {
	var div = document.getElementById(event.srcElement.id).parentElement;
	div.parentElement.remove();
}


function searchToDos() {
	var input  = document.getElementById("myInput");
	var filter = input.value.toUpperCase();
	var list = document.getElementsByClassName("todos-list")[0];
	var title, txtValue;

	var elementChildrens = list.children;

	for (var i=0, child; child=elementChildrens[i]; i++) {
		title = child.getElementsByClassName("todos__task-title")[0];
		txtValue = title.textContent || title.innerText;
  		if (txtValue.toUpperCase().indexOf(filter) > -1) {
  			child.style.display = "";
    	} else {
    		child.style.display = "none";
    	}
	}
}

























