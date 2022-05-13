const toDoList = document.getElementById('todo');
const doneList = document.getElementById('done');
const inputElement = document.getElementById('input');

let todoArray = ['Learn HTML', 'Learns CSS', 'Learn JavaScript'];
let doneArray = [];


toDoList.innerHTML = todoArray.join('<br>');


function transferDone(){
    doneArray = todoArray.slice(0, 2);
    todoArray = todoArray.splice(2,1);
   updateLists()
}

function addTodo(){
    const value = inputElement.value;
    const isValueEmptyOrExisting = value == '' || todoArray.includes(value);
    
    if (!isValueEmptyOrExisting) {
        todoArray.push(inputElement.value);
        inputElement.value = '';
        
    }
    updateLists();
}

function updateLists(){
    toDoList.innerHTML = '';
    doneList.innerHTML = '';

    for (let index = 0; index <todoArray.length;index++){
        toDoList.innerHTML += `<li>${todoArray[index]}</li>`
    }

    for (let index = 0; index < doneArray.length; index++){
        doneList.innerHTML += `<li>${doneArray[index]}</li>`
    }
   
  
}

transferDone();

// // const newArray = ['a','b','c'];
// // for (let index = 0; index <newArray.length; index++ ){
// //     console.log(index);
// //     console.log(newArray[index]);

// }