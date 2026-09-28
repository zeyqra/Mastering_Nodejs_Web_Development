import { readFile } from "fs";
import { IncomingMessage, ServerResponse } from "http";


export const handler = (req: IncomingMessage, res: ServerResponse) => {
  readFile('data.json', (err: Error | null, data: Buffer) => {
    if (err == null) {
      res.end(data, () => console.log('console: File sent', ))
    } else {
      console.log('console: Error', err.message)
      res.statusCode = 500
      res.end()
    }
  })
}