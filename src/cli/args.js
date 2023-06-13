const parseArgs = () => {
    const args = process.argv.slice(2);
    const output = [];

    for (let i = 0; i < args.length; i += 2) {
        const name = args[i].slice(2);
        const value = args[i + 1];
        output.push(`${name} is ${value}`);
    }

    console.log(output.join(', '));
};

parseArgs();