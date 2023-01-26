import { PrismaClient, Conversation, Prisma, User  } from "@prisma/client";

const prisma = new PrismaClient()

export const addConversationModel = async(data: Prisma.ConversationCreateInput) => {
    return prisma.conversation.create({
        data
    })
}

export const deleteConversationModel = async(idConversation: number) => {
    return prisma.conversation.delete({
        where: {
            id:idConversation
        }
    })
}

export const getConversationModel = async(conversationId: number)  => {
    return prisma.conversation.findUnique({
        where: {
            id: conversationId
        } 
    })
}

export const getAllConversationModel = async(idUser: number) => {
    
    const conversations = prisma.conversation.findMany({
        where: {
            AND: [
                {
                    OR:[
                        {fromId: idUser},
                        {toId: idUser}      
                    ],
                }

            ]
            

        }
    });
    
    return conversations;
}