import * as express from "express";
import * as bodyParser from "body-parser";
import connect from "./connect";
import UrlSchema from './schemas/UrlSchema';

//
// connect database
//
connect("mongodb://localhost:27017/todo");

const port = 8081 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "app ok",
  });
});

app.get("/shortener", (req: express.Request, res: express.Response) => {
  res.json({
    message: "shortener ok",
  });
});

app.post("/shortener", (req: express.Request, res: express.Response) => {
  const { url } = req.body;

  const shortUrl = Math.random().toString(36).substring(2, 8);
  
  UrlSchema.create({ 
    originalUrl: url,
    shortUrl 
  });

  res.json({newUrl: shortUrl});
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

export default { app };
