// import { readFile } from "fs";
import { readFile } from "fs/promises";
import { IncomingMessage, ServerResponse } from "http";
import { endPromise, writePromise } from "./promises";
import { Worker } from "worker_threads";
// import { Count } from "./count_cb";
import { Count } from "./count_promise";
const total = 2_000_000_000;
const iterations = 5;
let shared_counter = 0;
export const handler = async (req: IncomingMessage, res: ServerResponse) => {
  // try {
  //   const data: Buffer = await readFile('data.json')
  //   await endPromise.bind(res)(data)
  //   console.log('console: File ssent')
  // } catch (err: any) {
  //   console.log(err?.message ?? err);
  //     res.statusCode = 500
  //     res.end()
  // }
  const request = shared_counter++;

  // Count(request, iterations, total, async (err, update) => {
  //   if (err !== null) {
  //     console.log(err);
  //     res.statusCode = 500
  //     await res.end()
  //   } else if (update !== true) {
  //     const msg = `Request: ${request}, Iteration: ${(update)}`;
  //     console.log(msg);
  //     await writePromise.bind(res)(msg + '\n')
  //   } else {
  //     await endPromise.bind(res)('Done')
  //   }
  // })

  try {
    await Count(request, iterations, total)
    const msg = `Request: ${request}, Iterations: ${(iterations)}`;
    await writePromise.bind(res)(msg + '\n')
    await endPromise.bind(res)('Done')
  } catch (err: any) {
    console.log(err);
    res.statusCode = 500;
    res.end();
  }

}