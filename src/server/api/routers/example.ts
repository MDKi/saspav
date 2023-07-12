import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
    getAll: publicProcedure.query(({ ctx }) => {
      ctx.prisma.example.findMany();
      return true;
    }),
  save: publicProcedure.input(z.object({ name: z.string() })).mutation(({ctx,input}) => {
    console.log('estoy mutando loco');
    console.log('Este es el input kpo >>',input);
    const user = ctx.prisma.example.create({
      data:{
        ...input
      }
    });
    return {...user};
  })
});
