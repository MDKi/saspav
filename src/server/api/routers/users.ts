import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import * as trpc from '@trpc/server'
import {createUserInputSchema} from '../../../schema/user.schema'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const userRouter = createTRPCRouter({
    user: publicProcedure
    // .input(z.object({ text: z.string() }))
    .query(() => {
    return {
    user: `USER texto desde el backend`,
    };
    }),

    saveUser: publicProcedure.input(createUserInputSchema).mutation(async ({ctx,input}) => {
        try {
            console.log(' >>> respuesta de la mutacion<<< ',ctx)
            console.log(' >>> respuesta de la mutacion<<< ',input)
            const {
                apellido,
                nombre,
                dni,
                direccion,
                email,
                fechaCreacion,
                fechaModificacion,
                fechaNacimiento,
                telefono
            } = input
            const user = await ctx.prisma.usuario.create({data:{
                apellido,
                nombre,
                dni,
                direccion,
                email,
                fechaCreacion,
                fechaModificacion,
                fechaNacimiento,
                telefono
            }});
            console.log('este es el usuario >>> ',user)
            return user;
        } catch (error) {
            console.log('tengo un error >>> ',error)
           if(error instanceof PrismaClientKnownRequestError){
            if(error.code === 'P2002'){
                throw new trpc.TRPCError({
                    code: 'CONFLICT',
                    message: 'El usuario ya se encuentra registrado'
                })
            }
           } 
           throw new trpc.TRPCError({
            code:"INTERNAL_SERVER_ERROR",
            message: 'Algo salio mal',
           })
        }
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

});
