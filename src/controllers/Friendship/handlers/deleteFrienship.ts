import { RequestHandler } from 'express';
import { deleteFriendshipModel } from '../../../models/Friendship';

const deleteFriendship: RequestHandler = async (req, res, next) => {
    try {
        const friendship = await deleteFriendshipModel(req.body);
        res.json(friendship); //TODO zod
    } catch (err) {
        next(err);
    }
}

export default deleteFriendship;