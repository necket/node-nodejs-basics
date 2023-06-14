import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    const upzip = createGunzip();
    const input = createReadStream('./src/zip/files/archive.gz');
    const output = createWriteStream('./src/zip/files/fileToCompress.txt');

    pipeline(input, upzip, output, (error) => {
        if (error) throw new Error(error.message);
    });
};

await decompress();