import { Worker } from "worker_threads";

export const Count = (request: number, iterations: number, total: number, cb: (err: Error | null, update: number | boolean) => void) => {
    const worker = new Worker(__dirname + "/count_worker.js", {
      workerData: {
        iterations,
        total,
        request
      }
    });

    worker.on('message', async (iter: number) => {
      cb(null, iter)
    })

    worker.on('exit', async (code: number) => {
      cb(code === 0 ? null : new Error(), true);
    })

    worker.on('error', async err => {
       cb(err, true)
    })
}