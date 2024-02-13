import { prisma } from "@/lib/prisma"

export async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({ where: { email } })
        return user
    }
    catch {
        return null
    }
}