import express from "express";
const app = express();

app.get("/games", (resquest, response) => {
  return response.json([]);
});

app.post("/ads", (resquest, response) => {
  return response.status(201).json([]);
});

app.get("/games/:id/ads", (resquest, response) => {
  // const gameId = resquest.params.id;

  return response.json([
    { id: 1, nome: "Anúncio 1" },
    { id: 2, nome: "Anúncio 2" },
    { id: 3, nome: "Anúncio 3" },
    { id: 4, nome: "Anúncio 4" },
  ]);
});

app.get("/ads/:id/discord", (resquest, response) => {
  // const adId = resquest.params.id;

  return response.json([
    { id: 1, nome: "Anúncio 1" },
    { id: 2, nome: "Anúncio 2" },
    { id: 3, nome: "Anúncio 3" },
    { id: 4, nome: "Anúncio 4" },
  ]);
});

app.listen(3333);
