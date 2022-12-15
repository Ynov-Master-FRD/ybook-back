
import { PrismaClient,Post, Prisma } from '@prisma/client'

const prisma = new PrismaClient()



export const getAllPostsModel = async (): Promise<Post[]> => {
    return await prisma.post.findMany()
}

export const getPostModel = async (id: number, options?: Prisma.PostFindUniqueArgs): Promise<Post | null> => {
    return await prisma.post.findUnique({
        where: {
            id
        },
    })
}

export const createPostModel = async (data: Prisma.PostCreateInput): Promise<Post> => {
    return await prisma.post.create({
        data
    })
}


export const likePostModel = async (postId: number, userId: number): Promise<Post> => {
    return await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            postLikes: {
                connect: {
                    id: userId
                }
            }
        }
    })
}

export const unlikePostModel = async (postId: number, userId: number): Promise<Post> => {
    return await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            postLikes: {
                disconnect: {
                    id: userId
                }
            }
        }
    })
}


