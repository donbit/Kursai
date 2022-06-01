// const data JSON.parse(localStorage.getItem('Array')) || [];

let date = new Date();
let [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
let [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];


let data = [
    {
        name: 'Name',
        amount: 'Amount' ,
        date: [month, day, year, hour, minutes, seconds],
    }
];
console.log(data);


const tableBody = document.getElementById('table');
const keys = ['name', 'amount', 'date', '']


function renderTableData() {
    tableBody.innerHTML = '';
    data.map(item => {
        const row = document.createElement('tr');

        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = item[key];

            if (!key) {
                const buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete';
                buttonDelete.onclick = () => { }
               
                const buttonEdit = document.createElement('button');
                buttonEdit.textContent = 'Edit';
                buttonEdit.onclick = () => {
                    
            
                    const popup = document.createElement('dialog')
                    popup.open = true;

                    const inputName = document.createElement('input')
                    inputName.value = item.name
                    popup.appendChild(inputName);
            
                    const inputAmount = document.createElement('input')
                    inputAmount.value = item.amount
                    popup.appendChild(inputAmount);

                    const confirmButton = document.createElement('button')
                    confirmButton.textContent = 'Save';
            
                    confirmButton.onclick = () => {
                      

                        
                        console.log('Save was clicked');
                        item.name = inputName.value
                        item.amount = inputAmount.value
                        item.date = Date();
                        renderTableData()
                        popup.open = false;
                    }
                    
                    
                    popup.appendChild(confirmButton);
            
                    const cancelButton = document.createElement('button')
                    cancelButton.textContent = 'Cancel';
                   
                    cancelButton.onclick = () => {
                        popup.open = false;
                    }
                    popup.appendChild(cancelButton);
                    document.body.appendChild(popup);
                }
                dataCell.appendChild(buttonEdit);
                dataCell.appendChild(buttonDelete);
            
            }
            
        
            row.appendChild(dataCell);

        }
        tableBody.appendChild(row);
    })
}

renderTableData();


let addEntry = document.getElementById("addButton");
addEntry.addEventListener('click', event => {
    
    const inputName = document.getElementById('name').value;
    const inputAmount = document.getElementById('amount').value;
    addNewData();
    
}
);


function addNewData() {
    const inputName = document.getElementById('name').value;
    const inputAmount = document.getElementById('amount').value;
  
    let newEntry = {
        name: inputName,
        amount: inputAmount,
        date: [month, day, year, hour, minutes, seconds],
    }
    
    data.push(newEntry)
    
    renderTableData(data);
}





////////////////////////////

// const dataEntries = [
//     {
//         name: 'Pavadinimas',
//         amount: 'Suma' ,
//         date: ''
    
//     }

// ];



// let date = new Date();
// const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
// let [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];



// const tableBody = document.getElementById('table');
// const elements = Object.keys(dataEntries[0]);




// function renderTableData(array) {
//     tableBody.innerHTML = '';
//     array.map((financeRow) => {
//         const rowElement = document.createElement('tr');
        

//         for (let element of elements) {
//             const dataCellElement = document.createElement('td');

//             if (element === 'Data') {
              
//             } else {
//             dataCellElement.textContent = financeRow[element];
//         }
//         rowElement.appendChild(dataCellElement);
//         }
//         tableBody.appendChild(rowElement);
//     })
   
   
// }

// renderTableData(dataEntries);

// function addNewEntry() {
   
//     const nameInput = document.getElementById('name').value;
//     const numberInput = document.getElementById('amount').value;
  
//     let newEntry = {
//         name: nameInput,
//         amount: numberInput,
//         date: [month + 1, day, year]
    
//     }

//     dataEntries.push(newEntry)
    
//     renderTableData(dataEntries);
// }



// let addEntry = document.getElementById("addButton");
// addEntry.addEventListener('click', event => {
    
//     const nameInput = document.getElementById('name').value;
//     const numberInput = document.getElementById('amount').value;
//     addNewEntry();
    
// }

// );









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


