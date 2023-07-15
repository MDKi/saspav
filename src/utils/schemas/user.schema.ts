import { z } from "zod";


export const newUserSchema = z.object({                       
    nombre: z.string(),                  
    apellido: z.string(),
    dni: z.string(),
    email: z.string().email(),
    telefono: z.string(),
    direccion: z.string(),
    fechaNacimiento: z.string(),
})