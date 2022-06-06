const file = {};
// dir - folderis
// fileName  - pavadinimas.jpg su pletiniu ".jpg"
// content - turinys, kuris bus irasomas i kuriama faila

/**
 * sukuriamas failas, jei tokio nera nurodytoje direktorijoje
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi nori failai pvz.: /data/users
 * @param {string} fileName file pavadinimas su tipu/pletiniu
 * @param {*} content turinys kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; klaidos atveju - `false`
 */

file.create = (dir, fileName, content ) => {
    console.log('creating file...');
}
file.read = () => {
    console.log('read file');
}
file.update = () => {
    console.log('update file');
}
file.delete = () => {
    console.log('delete file');
}


export { file };