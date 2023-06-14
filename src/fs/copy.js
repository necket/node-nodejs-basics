import { cp } from 'fs/promises';

const SRC_DIR = './src/fs/files';
const DEST_DIR = './src/fs/files_copy';

const copy = async () => {
    try {
        await cp(SRC_DIR, DEST_DIR, { errorOnExist: true, force: false, recursive: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
