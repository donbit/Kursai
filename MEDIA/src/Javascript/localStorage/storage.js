let dataEntries = [
    {
        name: 'Pavadinimas',
        number: 'Suma' ,
        date: 'Data'
    
    }

];



let date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
let [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];



const tableBody = document.getElementById('table');
const elements = Object.keys(dataEntries[0]);




function renderTableData(array) {
    tableBody.innerHTML = '';
    array.map((financeRow) => {
        const rowElement = document.createElement('tr');
        

        for (let element of elements) {
            const dataCellElement = document.createElement('td');

            if (element === 'Data') {
              
            } else {
            dataCellElement.textContent = financeRow[element];
        }
        rowElement.appendChild(dataCellElement);
        }
        tableBody.appendChild(rowElement);
    })
   
   
}

renderTableData(dataEntries);

function addNewEntry() {
   
    const nameInput = document.getElementById('name').value;
    const numberInput = document.getElementById('number').value;
  
    let newEntry = {
        name: nameInput,
        number: numberInput,
        date: [month + 1, day, year]
    
    }

    dataEntries.push(newEntry)
    
    renderTableData(dataEntries);
}



let addEntry = document.getElementById("addButton");
addEntry.addEventListener('click', event => {
    
    const nameInput = document.getElementById('name').value;
    const numberInput = document.getElementById('number').value;
    addNewEntry();
    
}

);


////////////////
// const nameInput;
// const numberInput;
// const addButton;
// const data;

// addButton.onclick = () => addData();

// function addData() {
//     let object = {
//         name: nameInput.value,
//         amount: numberInput.value,
//         date: new Date(),
//     }

//     data.push(object);
//     setItem('data', data);
// }

// function setItem(name, value) {
//     localStorage.setItem(name, JSON.stringify(value));
// }










// const array = ['1',2, '3']



// function add() {

//     localStorage.setItem('Array', JSON.stringify(array));

// }

// function get() {
    
    
//     const item = localStorage.getItem('Array');
//     const parsedItem = JSON.parse(item);
//     console.log(item);
//     console.log(parsedItem);

// }

// function del() {
    
//     localStorage.removeItem('Array')

// }







// localStorage.setItem('name', 'labas');
// localStorage.setItem('number', 2);
// localStorage.setItem('Boolean', true);

// localStorage.setItem('Array', JSON.stringify(["asd", "asd", "asd"]));


// const a = localStorage.getItem('name');
// const b = localStorage.getItem('number');
// const c = JSON.parse(localStorage.getItem('Array'));

// console.log(a);
// console.log(b);
// console.log(c);


