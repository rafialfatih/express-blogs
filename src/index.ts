import express from "express";
import { router as CommentsRoute } from "./routes/CommentsRoutes";
import { router as PostsRoute } from "./routes/PostsRoutes";
import { router as UsersRoute } from "./routes/UsersRoutes";

const app = express();

app.use(express.json());

app.use("/users", UsersRoute);
app.use("/posts", PostsRoute);
app.use("/comments", CommentsRoute);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
