import { file } from './lib/file.js';
import { skaitomKarves } from './lib/karviuTurgus.js';




const user = {
    name: 'tomas',
    age: 88,
    isLoggedIn: false,
}

const createNew = file.create('./users2', 'tomas.json', user);


// const petroKarves = await skaitomKarves('users', 'petras.json');
// const marytesKarves = await skaitomKarves('users', 'maryte.json');
// const jonoKarves = await skaitomKarves('users', 'jonas.json');