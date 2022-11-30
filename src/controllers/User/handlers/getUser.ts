import { RequestHandler } from "express";
import { fakedataUser, getModelUser } from "../../../models/User";

export type UserRouteParams = {
    id: number,
    message: string
}

const getUser: RequestHandler<UserRouteParams> = (req, res, next) => {
    try{
        const user = getModelUser(req.params.id)
        if (!user) throw new Error("user not found")

        res.json(user)
    }catch(err){
        next(err);
    }
}

export default getUser;