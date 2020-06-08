import * as express from "express";
import * as bodyParser from "body-parser";
import connect from "./connect";
import UrlSchema from './schemas/UrlSchema';
import { makeUrl } from '../src/helpers/Url';

//
// connect database
//
connect("mongodb://localhost:27017/todo");

const port = 8081 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// redirecionamento
//
app.get("/:shortUrl", async (req: express.Request, res: express.Response) => {

  const { shortUrl } = req.params;
  const findUrl = await UrlSchema.findOne({ shortUrl });
  const originalUrl = findUrl?.originalUrl;

  if (originalUrl) {
    return res.status(301).redirect(originalUrl);
  } else {
    return res.status(404).json({error: "url not found !"});
  }

});

//
// encurtador
//
app.post("/shortener", (req: express.Request, res: express.Response) => {
  const { url } = req.body;

  // TODO: E se a URL já existir ?
  // const _url = await UrlSchema.findOne({ url });
  // if (_url) return _url.shortUrl;

  const shortUrl = makeUrl();

  UrlSchema.create({ 
    originalUrl: url,
    shortUrl 
  });

  return res.status(201).json({ newUrl: shortUrl });
});

//
// server
//
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

export default { app };
