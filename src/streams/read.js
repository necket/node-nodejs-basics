import { createReadStream } from 'fs';

const read = async () => {
    const rs = createReadStream('./src/streams/files/fileToRead.txt');
    rs.pipe(process.stdout);
};

await read();