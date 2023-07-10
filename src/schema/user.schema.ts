import z from 'zod'

export const createUserInputSchema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    dni: z.string(),
    email: z.string().email(),
    telefono: z.string().optional(),
    direccion: z.string(),
    fechaNacimiento: z.date(),
    fechaCreacion: z.date(),
    fechaModificacion: z.date(),
    // historialV   igencia: 
    // TODO: HACER LOS SCHEMAS
    // roles: z.
    // asignacionesDeRol: z.
    // asignacionesDeProfesion: z.
})
