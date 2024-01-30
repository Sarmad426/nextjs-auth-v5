import { z } from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({ message: "invalid Email!" }),
    password: z.string().min(1, { message: "invalid Password!" })
})

export const RegisterSchema = z.object({
    name: z.string().min(2, { message: "Name of 2 characters is required!" }),
    email: z.string().email({ message: "invalid Email!" }),
    password: z.string().min(1, { message: "Password of characters is required!" })
})



