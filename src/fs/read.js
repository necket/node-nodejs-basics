import { readFile } from 'fs/promises';

const read = async () => {
    try {
        const content = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();