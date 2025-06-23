import * as cors from 'cors';
import * as express from 'express';
import 'express-async-errors';
import handleError from './middlewares/handelError';

class App {
  public app: express.Express

  constructor() {
    this.app = express()
    this.config();
    this.initRoutes();
    this.initMiddlewares();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('./public'));
  }

  private initRoutes(): void {
    this.app.get('/coffee', (_req, res) => {
      res.status(418).end()
    })
  }

  private initMiddlewares(): void {
    this.app.use<any>(handleError);
  }
}

export default new App().app;
