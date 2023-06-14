import { Transform } from 'stream';

const reverseStream = new Transform({
    transform: function(chunk, _, callback) {
        const reversed = chunk.reverse();
        this.push(reversed + '\n\n');
        callback();
    }
})

const transform = async () => {
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();