import { RequestHandler } from "express";
import { getIgnoredFriendshipRequestsModel } from "../../../models/Friendship";

const getIgnoredFriendshipRequests: RequestHandler = async (req, res, next) => {
  try {
    const friendship = await getIgnoredFriendshipRequestsModel(
      Number(req.params.userId)
    );
    res.json(friendship);
    console.log(friendship);
  } catch (err) {
    next(err);
  }
};

export default getIgnoredFriendshipRequests;
