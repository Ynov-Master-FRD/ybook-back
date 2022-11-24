import { RequestHandler } from "express";
import { getFakeMessage } from "../../../models/Message";
import { getModelUser } from "../../../models/User";


export type UserRouteParams = {
    id: string;
}

const getUserMessage: RequestHandler<UserRouteParams> = (req, res, next) => {
    try{
        const user = getModelUser(parseInt(req.params.id))
        if (!user) throw new Error("user not found")
        res.json(getFakeMessage(user.id))
    }catch(error){
        next(error);
    }

}

export default getUserMessage;