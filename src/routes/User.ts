import expres from 'express';
import Conversation from '../controllers/Conversation';
import User from '../controllers/User';
import ConversationRouter from './Conversation';
import MessageRouter from './Message';
const UserRooter = expres.Router();

UserRooter.get("/:id", User.getUser);
UserRooter.use("/:id/conversations",ConversationRouter)
UserRooter.use("/:id/messages",MessageRouter)
UserRooter.get("/", User.getAllUsers);
UserRooter.post("/", User.createUser);




export default UserRooter;
