import express from "express";
import { recentlyPlayed, playlists } from "./mock.js";

const app = express();

app.get("/api/playlists/recently-played", (req, res) =>
  res.json(recentlyPlayed),
);
app.get("/api/playlists/", (req, res) => res.json(playlists));

app.listen(4001, () => {
  console.clear();
  console.log("## Playlist Service");
  console.log("http://localhost:4001");
});
