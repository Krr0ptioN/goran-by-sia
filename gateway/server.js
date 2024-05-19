import express from "express";
import httpProxy from "express-http-proxy";
import securityMiddleware from "./session.js";

const app = express();

const web = httpProxy("http://localhost:1234");
const playlistService = httpProxy("http://localhost:4001");
const fileService = httpProxy("http://localhost:4400");

app.use(securityMiddleware);

app.all("/api/playlists/", playlistService.bind(playlistService));
app.all("/media/:type/:id", fileService.bind(fileService));

app.use(web);

app.listen(8080);
