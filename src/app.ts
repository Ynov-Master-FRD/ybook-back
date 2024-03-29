import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { Response, Request, NextFunction } from "express";
import UserRooter from "./routes/User";
import PostRouter from "./routes/Post";
import PostLikeRouter from "./routes/PostLike";
import PostCommentRouter from "./routes/PostComment";
import FriendshipRouter from "./routes/Friendship";
import ConversationRouter from "./routes/Conversation";
import cors from "cors";


const app = express();



const corsOptions = {
  origin : "http://localhost:3000",
  credentials : true,
  optionSuccessStatus : 200
}
app.use(cors(corsOptions));

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
app.use("/friendship", FriendshipRouter)
app.use("/conversations",ConversationRouter)

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
