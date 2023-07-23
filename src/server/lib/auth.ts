import { jwtVerify } from "jose";

interface UserPayload {
    id: string,
    tokenVersion?: number
    exp:number
}


export const verifyToken = async (token: string) => {
    try {
        const secretKey = process.env.TOKEN_SECRET
        const verified = await jwtVerify(token,new TextEncoder().encode(secretKey));
        return verified.payload as any as UserPayload
    } catch (error) {
        throw new Error('Token expired')
    }
}