export const fakedataUser = [
    {id: 1, name: "Dimitri"},
]

export const getModelUser = (id: number):{id: number, name: string} | undefined => {
    return fakedataUser.find((user)=> user.id === id)
}
