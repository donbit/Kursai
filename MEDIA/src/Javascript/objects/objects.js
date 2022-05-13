

let characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

const tableBody = document.getElementById('table');
const columns = Object.keys(characters[0]);




function renderTableData(array) {
    tableBody.innerHTML = '';
    array.map((character) => {
        const rowElement = document.createElement('tr');
        

        for (let column of columns) {
            const dataCellElement = document.createElement('td');

            if (column === 'homeworld') {
                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Homeworld';
                buttonElement.onclick = () => getHomeworld(character[column]);
                rowElement.appendChild(buttonElement);
            } else {
            dataCellElement.textContent = character[column];
        }
        rowElement.appendChild(dataCellElement);
        }
        tableBody.appendChild(rowElement);
    })
    buildTotalRow();
   
}

function getHomeworld(url) {
    fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data);
        })
    })
}



function getAllCharacterHeightSum() {
    return characters.map((character) => Number(character.height))
        .reduce((sum, current) => sum + current);
}
function getAllCharacterMassSum() {
    return characters.map((character) => Number(character.mass))
        .reduce((sum, current) => sum + current);
}

function getCharacterNamesLengthSum() {
    return characters.map((character) => character.name.length).reduce((a, b) => a + b);
}
// console.log(getCharacterNamesLengthSum());


function buildTotalRow() {
    const rowElement = document.createElement('tr');
    

    for (let column of columns)
     {
        const dataCellElement = document.createElement('td');
        dataCellElement.classList.add('fw-bold');
        if (column == 'height') {
            dataCellElement.textContent = getAllCharacterHeightSum();
        }
        if (column == 'mass') {
            dataCellElement.textContent = getAllCharacterMassSum();
        }
        if (column == 'name') {
            dataCellElement.textContent = `Simboliu suma ${getCharacterNamesLengthSum()}`
        }
        rowElement.appendChild(dataCellElement);
    }
    tableBody.appendChild(rowElement);
    
}

fetch('https://swapi.dev/api/people/').then((response) => {
    response.json().then((data) => {
        characters = data.results;
        renderTableData(characters);
    })
})
const sortByNumber = (property) => renderTableData(characters.sort((a, b) => a[property] - b[property]));
const sortByAlphabet = (property) => renderTableData(characters.sort((a, b) => a[property].localeCompare(b[property])));



// function getAllFirstNames() {
//     const names = characters.map((character) => {
//         return character.name.split(' ')[0]
//     })
//     return names;
// }
// console.log(getAllFirstNames());

const charactersWithGreaterMassThan80 = characters.filter((character) => character.mass > 80);
const charactersWithLesserHeightThan180 = characters.filter((character) => character.height < 180);
const charactersMale = characters.filter((character) => character.gender === 'male');
const charactersWithBlueEyes = characters.filter((character) => character.eye_color === 'blue');
renderTableData(characters);





function addCharacter() {
    const nameInput = document.getElementById('name').value;
    const heightInput = document.getElementById('height').value;
    const massInput = document.getElementById('mass').value;
    const eyeColorInput = document.getElementById('eye_color').value;
    const genderInput = document.getElementById('gender').value;

    const newCharacter = {
        name: nameInput,
        height: heightInput,
        mass: massInput,
        eye_color: eyeColorInput,
        gender: genderInput
    }

    characters.push(newCharacter)
}




// const a = [1, 2, 3];
// const b = ['a', 'b', 'c'];

// function mapSomethingA() {
//     a.map((item) => {

//     })
// }
// function mapSomethingB() {
//     b.map((item) => {

//     })
// }

// function mapSOmethingCorrectly(param) {
//     param.map((item) => {
//         console.log(item);

//     })
// }

// mapSOmethingCorrectly(b);


// const me = {
//     aFirstName: 'Eimantas',
//     bLastName: 'Riauba',
//     cAge: 28,

// };

// const moreOfMe = {
//     dHobby: 'silkografija',
//     eGender: 'male',
//     fHeight: 178,
// }

// const sujungtiMe = Object.assign(moreOfMe, me);
// console.log(moreOfMe);

// // const backendData = me;

// // backendData.gender = 'Male';
// // console.log(backendData);
// // console.log(me.age, me.firstName, me.lastName);
// // console.log(me.milestones[0], ',', me.milestones[1]);
// // console.log(me["key with space"]);

// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//         console.log()
//     }
// }

