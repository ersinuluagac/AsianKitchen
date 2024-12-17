// HTML Etiketleri
const newToDo = document.querySelector("#task");
const toDoList = document.querySelector("#list");
const toDoListElement = toDoList.querySelectorAll("li");
const toasts = document.querySelectorAll("#liveToast")

let todos = [];

// HTML Listesi Temizleme
function clearAllToDo() {
    toDoListElement.forEach(item => {
        item.remove()
    })
}

// Eklenecek Etkinlikler
document.addEventListener("DOMContentLoaded", clearAllToDo);
document.addEventListener("DOMContentLoaded", pageLoaded);
toDoList.addEventListener("click", removeToDo)
toDoList.addEventListener("click", completedToDo)

// Çalıştırılacak Fonksiyonlar
function pageLoaded() {
    checkToDoFromStorage();
    todos.forEach(function(todo) {
        newLi(todo);
    })
}

// Liste Elemanı Yaratma
function newLi(inputText) {
    let li = document.createElement("li");
    li.textContent = inputText;
    li.className = "";
    let trashIcon = document.createElement("i");
    trashIcon.className = "bi bi-trash float-right";
    li.appendChild(trashIcon);
    toDoList.appendChild(li);
}

// Görev Ekleme
function newElement(e) { //arayüze ekleme
    let inputText = newToDo.value.trim();
    if (inputText == null || inputText == "") {
        $(toasts[1]).toast('show');
        newToDo.value = "";
    } else {
        newLi(inputText);
        addToDoToStorage(inputText) //depolamaya ekleme
        $(toasts[0]).toast('show');
        newToDo.value = "";
    }
    e.preventDefault();
}

// Yerel Depolamaya Ekleme
function addToDoToStorage(inputText) {
    checkToDoFromStorage();
    todos.push(inputText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Görev Silme
function removeToDo(e) {
    if(e.target.classList.contains("bi-trash")) {
        let todo = e.target.parentElement;
        todo.remove();
        removeToDoFromStorage(todo.textContent);
    }
}

// Yerel Depolamadan Silme
function removeToDoFromStorage(todoText) {
    checkToDoFromStorage();
    todos.forEach(function(todo, index) {
        if(todoText  === todo) {
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    })
}

// İşaretleme
function completedToDo(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        
    }
}

// Yerel Depolama Kontrolü
function checkToDoFromStorage() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}