// import { RequestHandler } from "express"
// import { addConversationModel } from "../../../models/Conversation"

// const createConversationRequest: RequestHandler = async (req: Request, res: Response, next) => {
//     try{
//         const conversation = await addConversationModel(req.body);
//         res.json(conversation)
//     }catch(err){
//         next(err)
//     }
// }

// export default createConversationRequest