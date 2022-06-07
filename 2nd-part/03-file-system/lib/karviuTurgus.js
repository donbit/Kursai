import { file } from './file.js';

async function skaitomKarves(dir,fileName) {

    const readStatus = await file.read(dir, fileName);
    console.log(fileName, readStatus);
}
export { skaitomKarves };