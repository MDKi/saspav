import { z } from "zod";
import { createTRPCRouter, publicProcedure,privateProcedure } from "~/server/api/trpc";
import {newUserSchema} from '~/utils/schemas/user.schema'
export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
    // getAll: publicProcedure.query(({ ctx }) => {
    //   ctx.prisma.example.findMany();
    //   return true;
    // }),
  save: publicProcedure.input(newUserSchema).mutation(({ctx,input}) => {
    console.log('este es el input que llego >>> ',input)

    const user = ctx.prisma.usuario.create({
      data:{
        ...input
      }
    });
    return user;
  }),
  save2: privateProcedure.input(newUserSchema).mutation(({ctx,input}) => {
    console.log('este es el input que llego >>> ',input);

    const user = ctx.prisma.usuario.create({
      data:{
        ...input
      }
    });
    return user;
  })
});
