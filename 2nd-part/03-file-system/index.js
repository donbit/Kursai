import { file } from './lib/file.js';
console.log(file);

const user = {
    name: 'Petras',
    age: 99,
    isLoggedIn: false,
}

file.create('./data/users', 'info.txt', user);
