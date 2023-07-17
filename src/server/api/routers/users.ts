import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { createTRPCRouter, publicProcedure,privateProcedure } from "~/server/api/trpc";
import {newUserSchema,loginSchema} from '~/utils/schemas/user.schema'
import { validatePassword,newUserSession } from '~/utils/users'

export const usersRouter = createTRPCRouter({
  login: publicProcedure.input(loginSchema).mutation(async ({ctx,input}) => {

    console.log('esta es una query publica para el login loco :)')
    const user = await ctx.prisma.usuario.findUnique({
        where: {
            email: input.email,
          },
    });

    if(!user){
        console.log('error no hay usuario')
        throw new PrismaClientKnownRequestError('Usuario o contraseña incorrectos',{
            code: 'P2001',
            clientVersion: '2.24.0',
        });
    }

    // TODO: Validar que el usuario no esté dado de baja en el historialVigencia

    const isValidPassword =  await validatePassword(input.password,user)
    if(!isValidPassword){
        throw new PrismaClientKnownRequestError('Usuario o contraseña incorrectos',{
            code: 'P2001',
            clientVersion: '2.24.0',
        });
    }

    const { idUsuario,apellido, direccion, dni, email, fechaNacimiento, nombre, telefono } = user
    const createdAt = new Date()
    const sessionToken  = await newUserSession({
        idUsuario,
        apellido,
        direccion,
        dni,
        email,
        fechaNacimiento,
        nombre,
        telefono,
        createdAt
    }); 
    console.log('esta function crea una nueva session >> ',sessionToken);
    await ctx.prisma.usuario.update({
        where: {
            idUsuario:user.idUsuario
        },
        data:{
            sessions:{
                create: {
                    sessionToken,
                }
            }
        }
    })

    return {
        sessionToken
    };
  }),
  // TODO: OTROS METODOS
//   logout: privateProcedure.input(newUserSchema).mutation(({ctx,input}) => {
//     // TODO: TENGO QUE SETEAR LA FECHA FIN VIGENCIA DE LA SESION
//     console.log('este es el input que llego para el loguot >>> ',input)

//   }),
//   newUser: privateProcedure.input(newUserSchema).mutation(({ctx,input}) => {
//     console.log('este es el input que llego para el newUser >>> ',input);
//     console.log('este es el ctx >> ',ctx)
//     // const user = ctx.prisma.usuario.create({
//     //   data:{
//     //     ...input
//     //   }
//     // });
//     // return user;
//     return {user:'hola'};
//   }),


});
