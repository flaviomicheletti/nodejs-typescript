import * as express from "express";

const PORT = 8081;

const app = express();

app.get("/hello-world", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/hello-world/:nome", (req: express.Request, res: express.Response) => {
  const { nome } = req.params;
  res.json({
    message: `Olá ${nome}!`,
  });
});

app.listen(PORT, () => {
  console.log(`Aplicação escutando na porta ${PORT}`);
});
