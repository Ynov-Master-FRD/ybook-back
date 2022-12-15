import expres from 'express';
import Friendship from '../controllers/Friendship';
const FriendshipRouter = expres.Router();

FriendshipRouter.post("/accept", Friendship.acceptFriendshipRequest);
FriendshipRouter.post("/ignore", Friendship.ignoreFriendshipRequest);
FriendshipRouter.post("/add", Friendship.addFriendshipRequest);
FriendshipRouter.get("/requests", Friendship.getFriendshipRequests);
FriendshipRouter.get("/:id", Friendship.getFriendship);
FriendshipRouter.delete("/:id", Friendship.deleteFriendship);
