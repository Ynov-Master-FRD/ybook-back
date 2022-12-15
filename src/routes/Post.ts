import expres from 'express';
import Post from '../controllers/Post';
const PostRouter = expres.Router();

PostRouter.get("/:id", Post.getPost);
PostRouter.get("/", Post.getAllPosts);
PostRouter.post("/", Post.createPost);
PostRouter.post("/like/:postId", Post.likePost);
PostRouter.post("/unlike/:postId", Post.unlikePost);


export default PostRouter;
