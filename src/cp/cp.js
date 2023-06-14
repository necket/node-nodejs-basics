import { spawn } from 'child_process';

const scriptPath = './src/cp/files/script.js';

const spawnChildProcess = async (args = []) => {
    const childProcess = spawn('node', [scriptPath, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--arg1', 'value1', '--arg2', 'value2']);
