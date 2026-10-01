import { createServer } from "http"
import { createServer as createHttpsServer } from "https";
import { defaultHandler, newUrlHandler, notFoundHandler, redirectionHandler } from "./handler";
import { readFileSync } from "fs";
import express, { Express } from 'express'


const port = 5000
// const server = createServer()
const server = createServer(redirectionHandler)
// server.on('request', handler)
// server.listen(port)
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
// server.on('listening', () => {
//   console.log(`Server listening on port ${port}`);
// })

const https_port = 5500
const httpsConfig = {
  key: readFileSync('key.pem'),
  cert: readFileSync('cert.pem')
}

const expressApp: Express = express()
expressApp.get('/favicon', notFoundHandler)
expressApp.get('/newurl', newUrlHandler)
expressApp.get('*', defaultHandler)

const httpsServer = createHttpsServer(httpsConfig, expressApp)
httpsServer.listen(https_port, () => {
  console.log(`HTTPS Server listening on port ${https_port}`)
})