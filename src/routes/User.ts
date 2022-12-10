import expres from 'express';
import User from '../controllers/User';
const UserRooter = expres.Router();

UserRooter.get("/:id", User.getUser);
UserRooter.get("/", User.getAllUsers);
UserRooter.post("/", User.createUser);

export default UserRooter;
