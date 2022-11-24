import expres from 'express';
import User from '../controllers/User';
const UserRooter = expres.Router();

UserRooter.get("/:id", User.getUser);
UserRooter.get("/:id/message", User.getUserMessage);

export default UserRooter;