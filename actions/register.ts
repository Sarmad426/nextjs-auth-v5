'use server'

import { prisma } from '@/lib/prisma'
import { typeRegisterSchema, registerSchema } from "@/schema/form-schema"
import { getUserByEmail } from '@/lib/users'
import bcrypt from 'bcryptjs'

export const register = async (data: typeRegisterSchema) => {
    const validatedData = registerSchema.safeParse(data)

    if (!validatedData.success) {
        return { error: "Something went wrong!" }
    }

    const { name, email, password } = validatedData.data

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: "Email already exists!" }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma?.user.create({ data: { name, email, password: hashedPassword } })

    return { success: `${data.name} is Registered Successfully.` }

}