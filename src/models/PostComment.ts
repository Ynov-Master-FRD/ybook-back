
import { PrismaClient, PostComment, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllCommentOnPostModel = async (postId: number): Promise<PostComment[]> => {
    return await prisma.postComment.findMany({
        where: {
            postId
        },
        include: {
            user: {select: { firstname: true, lastname:true, avatarS3Key: true }}}
    })
}

export const createCommentOnPostModel = async (data: Prisma.PostCommentCreateInput): Promise<PostComment> => {
    return await prisma.postComment.create({
        data
    })
}

export const deleteCommentOnPostModel = async (id: number): Promise<PostComment> => {
    return await prisma.postComment.delete({
        where: {
            id
        }
    })
}
