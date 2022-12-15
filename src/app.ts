import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { Response, Request, NextFunction } from "express";
import lameAuth from "./middlewares/lame-auth";
import AuthMiddleware from "./middlewares/lame-auth";
import UserRooter from "./routes/User";
import PostRouter from "./routes/Post";
import PostLikeRouter from "./routes/PostLike";
import PostCommentRouter from "./routes/PostComment";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));




app.use("/user", UserRooter);
app.use("/post", PostRouter);
app.use("/postlike", PostLikeRouter)
app.use("/postcomment", PostCommentRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ err });
});

export default app;
