import { Request, Response } from 'express'
import { IncomingMessage, ServerResponse } from 'http'
// import { TLSSocket } from 'tls'

// export const isHttps = (req: IncomingMessage): boolean => {
//   return req.socket instanceof TLSSocket && req.socket.encrypted
// }

export const redirectionHandler = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(302, {
    Location: 'https://localhost:5500',
  })
  res.end()
}

export const notFoundHandler = (req: Request, resp: Response) => {
  // resp.writeHead(404, 'Not Found')
  // resp.end()
  resp.sendStatus(404)
}

export const newUrlHandler = (req: Request, resp: Response) => {
  // resp.writeHead(200, 'OK')
  // resp.write('Hello, New URL')
  // resp.end()
  resp.send('Hello, New URL' + req.params.message)
}

export const defaultHandler = (req: Request, resp: Response) => {
  // console.log(`---- HTTP Method: ${req.method}, URL: ${req.url}`);
  // console.log(`host: ${req.headers.host}`);
  // console.log(`accept: ${req.headers.accept}`);
  // console.log(`user-agent: ${req.headers["user-agent"]}`);

  // const protocol = isHttps(req) ? 'https' : 'http'
  // const parsedUrl = new URL(req.url ?? '', `${protocol}://${req.headers.host}`)
  // console.log(parsedUrl.host);
  // console.log(parsedUrl.hostname);
  // console.log(parsedUrl.port)
  // console.log(parsedUrl.protocol);
  // console.log(parsedUrl.pathname);

  // parsedUrl.searchParams.forEach((key, val) => console.log(`${key}: ${val}`))

  // res.end("Hello, World");

  // res.writeHead(200, 'OK')

  // if (!parsedUrl.searchParams.has('keyword')) {
  //   res.write('hello http')
  // } else {
  //   res.write(parsedUrl.searchParams.get('keyword'))
  // }

  // res.end()

  // return

  if (req.query.keyword) {
    resp.send(req.query.keyword)
  } else {
    resp.send(req.protocol.toUpperCase())
  }
}
