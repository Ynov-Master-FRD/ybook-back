import { RequestHandler } from 'express';
import { getFriendshipModel } from '../../../models/Friendship';

const getFriendship: RequestHandler = async (req, res, next) => {
    try {
        const friendship = await getFriendshipModel(req.body);
        res.json(friendship); //TODO zod
    } catch (err) {
        next(err);
    }
}

export default getFriendship;
