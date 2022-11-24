type UserMessage = {id: number, userId: number, message: string}

export const fakedataMessage:UserMessage[] = [
    {id: 1, userId: 1, message: "Hello"},
]

export const getFakeMessage = (id: number): UserMessage[]  => fakedataMessage.filter((message)=> message.userId === id)