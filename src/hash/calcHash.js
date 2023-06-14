import { readFile } from 'fs/promises';
import crypto from 'crypto';

const calculateHash = async () => {
    const fileToHash = await readFile('./src/hash/files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    hash.update(fileToHash);
    
    const hex = hash.digest('hex');
    console.log(hex);
};

await calculateHash();