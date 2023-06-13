import { readdir } from 'fs/promises';

const list = async () => {
    try {
        const fileNames = await readdir('./src/fs/files');
        console.log(fileNames.join('\n'));
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();