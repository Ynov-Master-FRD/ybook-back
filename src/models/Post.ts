
import { PrismaClient, Post, Prisma } from '@prisma/client'
import { count } from 'console'

const prisma = new PrismaClient()



export const getAllPostsModel = async (): Promise<Post[]> => {
    return await prisma.post.findMany({
        include: {
            user: true,
            postComments: true,
            postLikes: true,
        }
    })
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
                    userId
                }
            }
        }
    })
    console.log(post)

    //if the post is already liked by the user, remove the like
    if (post?.postLikes.length) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        return prisma.post.update({
            where: {
                id: postId
            },
            data: {
                postLikes: {
                    deleteMany: {
                        userId
                    }
                }
            }
        })
    } else {
        //if the post is not liked by the user, add the like
        console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbb')
        return prisma.post.update({
            where: {
                id: postId
            },
            data: {
                postLikes: {
                    create: {
                        userId
                    }
                }
            }
        })

    }

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


