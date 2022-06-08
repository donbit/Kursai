import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const file = {};

file.fullPath = (dir, fileName) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    return path.join(__dirname, '../data', dir, fileName);
}

/**
 * sukuriamas failas, jei tokio nera nurodytoje direktorijoje
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi failai pvz.: /data/users
 * @param {string} fileName file pavadinimas su tipu/pletiniu
 * @param {*} content turinys kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; klaidos atveju - `false`
 */

file.create = async (dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return true;

    } catch (error) {
        return false;
    } finally {
        if (fileDescriptor) {
            fileDescriptor.close();
        }
    }

}

/**
 * Perskaitomas failo turinys
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi nori failai pvz.: /data/users
 * @param {string} fileName file pavadinimas su tipu/pletiniu
 * @returns {Promise<string|boolean>} Sekmes atveju - failo turinys; klaidos atveju - `false`
 */
file.read = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    } catch (error) {
        return false;
    }
}

file.update = async (dir, fileName, content) => {

    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        fileDescriptor = await fs.open(filePath, 'r+');
        await fileDescriptor.truncate();
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return true;
    } catch (error) {
        return false;
    } finally {
        if (fileDescriptor) {
            await fileDescriptor.close();
        }
    }

}

file.delete = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        await fs.unlink(filePath);
        return true;
    } catch (error) {
        return false;
    }
}


export { file };