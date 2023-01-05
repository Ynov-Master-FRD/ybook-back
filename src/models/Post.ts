
import { PrismaClient, Post, Prisma } from '@prisma/client'

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


export const togglePostLikeModel = async (postId: number, userId: number): Promise<Post> => {
    //find if the post is already liked by the user
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        },
        select: {
            postLikes: {
                where: {
                    id: userId
                }
            }
        }
    })

    //if the post is already liked by the user, remove the like
    if (post?.postLikes.length) {
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
    //if the post is not liked by the user, add the like
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


