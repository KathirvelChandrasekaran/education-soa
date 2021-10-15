import bodyParser from "body-parser";
import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";

const app: Application = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.use("/api/v1/auth", require("./routes/api.auth.routes"));

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message || "Server error",
  });
};

app.use(errorHandler);

const server: Server = app.listen(process.env.PORT || 3000, () =>
  console.log("http://localhost:3000")
);
