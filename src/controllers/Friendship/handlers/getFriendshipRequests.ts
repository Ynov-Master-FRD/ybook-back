import { RequestHandler } from 'express';
import { getFriendshipRequestsModel } from '../../../models/Friendship';

const getFriendshipRequests: RequestHandler = async (req, res, next) => {
    try {
        const friendship = await getFriendshipRequestsModel(req.body);
        res.json(friendship); //TODO zod
    } catch (err) {
        next(err);
    }
}

export default getFriendshipRequests;
