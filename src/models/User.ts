import { PrismaClient, User, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const fakedataUser = [
    { id: 1, name: "Dimitri" },
]


export const getAllUsersModel = async (): Promise<User[]> => {
    return await prisma.user.findMany()
}

export const getModelUser = async (id: number): Promise<User | null> => {
    return await prisma.user.findUnique({
        where: {
            id
        }
    })
}


//create a new user in the database
export const createUserModel = async (data: Prisma.UserCreateInput): Promise<User> => {
    return await prisma.user.create({
        data
    })
}


