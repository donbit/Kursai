class ToDoList {
    constructor({_array}) {
        this.list = document.getElementById('list');
        this.toDo = [..._array];
        this.update();
    }
    add(text) {
        this.toDo.push(text);
        this.update();
    }

    update() {
        this.list.innerHTML = '';
    
        for (let text of this.toDo) {
            const listItem = document.createElement('li');

            listItem.textContent = text;

            this.list.appendChild(listItem);
            
        }
    }

    // delete(index) {
    //     this.toDo.splice(index, 1);
    //     this.update();
    // }
// delete(value) this.toDo.splice(this.toDo.indexOf(value),1);
    delete(value) {
        this.toDo.splice(this.toDo.indexOf(value),1);
        this.update();
    }
}

const input = document.getElementById('input');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');

const newList = new ToDoList({ _array: ['023', '123', '223', '323' ] });

addButton.onclick = () => newList.add(input.value);
deleteButton.onclick = () => newList.delete(input.value);


