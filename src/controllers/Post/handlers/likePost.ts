import {RequestHandler} from 'express';
import {likePostModel} from '../../../models/Post';

export const likePost: RequestHandler = async (req, res) => {
    const {postId} = req.params;
    const userId = req.body.userId;

    const post = await likePostModel(parseInt(postId), userId);

    return res.json(post);
}

export default likePost;
