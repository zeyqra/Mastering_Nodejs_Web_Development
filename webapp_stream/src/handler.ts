import { IncomingMessage, ServerResponse } from 'http'

export const basicHandler = (req: IncomingMessage, resp: ServerResponse) => {
  resp.setHeader('Content-Type', 'text/plain')

  let i = 0
  let canWrite = true
  const write = () => {
    console.log('start')

    do {
      canWrite = resp.write(`${i++}\n`)
    } while (canWrite && i < 10_000)

    console.log('Buffer is at capacity')

    if (i < 10_000) {
      resp.once('drain', () => {
        console.log('drain')
        write()
      })
    } else {
      resp.end('end')
    }
  }

  write()
}
