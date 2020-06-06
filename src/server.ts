import * as express from "express";
import connect from "./connect";

//
// connect database
//
// const MONGO_URI = "mongodb://10.0.0.129:27017/todo";
connect("mongodb://localhost:27017/todo");
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false


const port = 8081 || process.env.PORT;
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

app.listen(port, () => {
  console.log(`Aplicação escutando na porta ${port}`);
});

export default { app };
