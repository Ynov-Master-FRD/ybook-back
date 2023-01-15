
import { PrismaClient, Friendship, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const addFriendshipRequestModel = async (data: Prisma.FriendshipCreateInput): Promise<Friendship> => {
    return await prisma.friendship.create({
        data
    })
}

export const deleteFriendshipModel = async (id: number): Promise<Friendship> => {
    return await prisma.friendship.delete({
        where: {
            id
        }
    })
}

export const getFriendshipModel = async (id: number): Promise<Friendship | null> => {
    return await prisma.friendship.findUnique({
        where: {
            id
        }
    })
}

// acceptFriendshipRequest
// rejectFriendshipRequest
// cancelFriendshipRequest
// getFriendshipRequests

export const acceptFriendshipRequestModel = async (id: number): Promise<Friendship | null> => {
    return await prisma.friendship.update({
        where: {
            id
        },
        data: {
            status: "ACCEPTED"
        }
    })
}

export const ignoreFriendshipRequestModel = async (id: number): Promise<Friendship | null> => {
    return await prisma.friendship.update({
        where: {
            id
        },
        data: {
            status: "IGNORED"
        }
    })
}
/* 
export const getFriendshipRequestsModel = async (id: number): Promise<Friendship[]> => {
    return await prisma.friendship.findMany({
        where: {
            status: "PENDING",
        }
    })
} */

export const getFriendshipRequestsModel = async (userId: number): Promise<Friendship[]> => {
    console.log(userId);
    return await prisma.friendship.findMany({
        where: {
            AND: [
                { fromId: userId },
                { status: 'PENDING' },
            ],
        },
    });
}