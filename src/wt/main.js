import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const jobs = [];
    const cpus = os.cpus();

    cpus.forEach((_, i) => {
        const job = new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', { workerData: { num: 10 + i } });

            worker.on('message', (data) => {
                resolve({ status: 'resolved', data });
            });
    
            worker.on('error', () => {
                reject();
            });   
        }).catch(() => ({ status: 'error', data: null }));

        jobs.push(job);
    });

    const results = await Promise.all(jobs);
    console.log(results);
};

await performCalculations();