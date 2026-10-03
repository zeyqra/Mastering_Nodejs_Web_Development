import { IncomingMessage, ServerResponse } from 'http'
import { Transform } from 'stream'

export const readHandler = async (
  req: IncomingMessage,
  resp: ServerResponse
) => {
  req.setEncoding('utf-8')
  // req.on('data', data => {
  //   console.log(data)
  // })
  // req.on('end', () => {
  //   console.log('read end')
  //   resp.end()
  // })

  // for await (const data of req) {
  //   console.log(data)
  // }
  // console.log('read end')
  // resp.end()

  // req.pipe(resp)

  // req.pipe(createLowerTransform()).pipe(resp)

  if (req.headers['content-type'] == 'application/json') {
    req.pipe(createFromJsonTransform()).on('data', data => {
      if (data instanceof Array) {
        resp.write(`Received an array with ${data.length} items`)
      } else {
        resp.write('Did not receive an array')
      }
      resp.end()
    })
  } else {
    req.pipe(resp)
  }
}

const createLowerTransform = () =>
  new Transform({
    transform(data, encoding, callback) {
      callback(null, data.toString().toLowerCase())
    },
  })

const createFromJsonTransform = () =>
  new Transform({
    readableObjectMode: true,
    transform(data, encoding, callback) {
      callback(null, JSON.parse(data))
    },
  })
