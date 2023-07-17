/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const validatePassword = async (password: string,user:any ):Promise<boolean> => {
    const isPasswordValid:boolean = await bcrypt.compare(password, user.hashSaltPassword);
    return isPasswordValid;
} 

export const newUserSession = async (user:any):Promise<string> => {
    const secret = process.env.TOKEN_SECRET ? process.env.TOKEN_SECRET :'';
    
    const accessToken = await jwt.sign(JSON.stringify(user),secret) as string;

    console.log('Este es el accessToken >>> ',accessToken)

    return accessToken;
}