import { createServer } from "http"
import { handler } from "./handler";


const port = 5000
// const server = createServer()
const server = createServer(handler)

// server.on('request', handler)
// server.listen(port)

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

// server.on('listening', () => {
//   console.log(`Server listening on port ${port}`);
// })
