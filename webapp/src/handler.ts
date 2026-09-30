import { IncomingMessage, ServerResponse } from "http";

export const handler = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    // console.log(`---- HTTP Method: ${req.method}, URL: ${req.url}`);
    // console.log(`host: ${req.headers.host}`);
    // console.log(`accept: ${req.headers.accept}`);
    // console.log(`user-agent: ${req.headers["user-agent"]}`);

    const parsedUrl = new URL(req.url ?? '', `http://${req.headers.host}`)
    console.log(parsedUrl.host);
    console.log(parsedUrl.hostname);
    console.log(parsedUrl.port)
    console.log(parsedUrl.protocol);
    console.log(parsedUrl.pathname);

    parsedUrl.searchParams.forEach((key, val) => console.log(`${key}: ${val}`))

    res.end("Hello, World");
};