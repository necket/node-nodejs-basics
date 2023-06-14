import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
    const zip = createGzip();
    const input = createReadStream('./src/zip/files/fileToCompress.txt');
    const output = createWriteStream('./src/zip/files/archive.gz');

    pipeline(input, zip, output, (error) => {
        if (error) throw new Error(error.message);
    });
};

await compress();