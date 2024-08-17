import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import prisma from "../../lib/prisma"
import { Lucia } from "lucia"
import { RoleUser } from "@prisma/client"

const adapter = new PrismaAdapter(prisma.session, prisma.users)

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production",
        }
    },
    getUserAttributes: (attributes) => {
        return {
            name : attributes.name,
            role : attributes.role,
            email : attributes.email,
            passport : attributes.passport
        }
    }
})

declare module "lucia" {
   interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: {
        name: string
        email: string
        role: RoleUser
        passport: string | null
   }
}
}