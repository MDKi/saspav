import { z } from "zod";


export const newUserSchema = z.object({                       
    nombre: z.string(),                  
    apellido: z.string(),
    dni: z.string(),
    email: z.string().email(),
    telefono: z.string(),
    direccion: z.string(),
    fechaNacimiento: z.string(),
});

// TODO:

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),    
})

export const userSchema = z.object({
    idUsuario: z.number(),
    nombre: z.string(),
    apellido: z.string(),
    dni: z.string(),
    email: z.string().email(),
    telefono: z.string(),
    direccion: z.string(),
    fechaNacimiento: z.string(),
    fechaCreacion: z.date(),    
    fechaModificacion: z.date(), 
    hashSaltPassword: z.string(),
    salt: z.string(),
    passwordExpiration: z.string(),
    resetToken: z.string(),
    // sessions          HistoriaSessionUsuario[]
})