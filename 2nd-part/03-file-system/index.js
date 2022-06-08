import { file } from './lib/file.js';
// import { skaitomKarves } from './lib/karviuTurgus.js';




const user = {
    name: 'tomas',
    age: 88,
    isLoggedIn: false,
}


const user2 = {
    name: 'petras',
    age: 88,
    isLoggedIn: true,
}

const createStatus = await file.create('users', 'tomas.json', user);
console.log('create', createStatus);
const readStatus = await file.read('users', 'tomas.json');
console.log('read:', readStatus);

const updateStatus = await file.update('users', 'tomas.json', user2);
console.log('update', updateStatus);

const readStatus2 = await file.read('users', 'tomas.json');
console.log('read-updated:', readStatus2);

const deleteStatus = await file.delete('users', 'tomas.json');
console.log('delete:', deleteStatus);



// const petroKarves = await skaitomKarves('users', 'petras.json');
// const marytesKarves = await skaitomKarves('users', 'maryte.json');
// const jonoKarves = await skaitomKarves('users', 'jonas.json');