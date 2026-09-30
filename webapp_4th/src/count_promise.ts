import { Worker } from "worker_threads";

export const Count = (request: number, iterations: number, total: number) : Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const worker = new Worker(__dirname + "/count_worker.js", {
      workerData: {
        iterations,
        total,
        request
      }
    });

    worker.on('message', (iter: number) => {
      const msg = `Request: ${request}, Iteration: ${(iter)}`;
      console.log(msg);
    })

    worker.on('exit', (code: number) => {
      if (code === 0) resolve()
        reject()
    })

    worker.on('error', reject)
  })
}