import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from "next/link";
import { useState } from 'react';

export default function SerdResetEmail (){
  const [error, setError] = useState(false);

  const sendEmail = () => {
    console.log('Enviando el email... ');

    /*
      TODO: LLAMAR A LA API Y BUSCAR EL USUARIO
        
        - Si existe el user setear el token y las demás weas como cookies
        - Si no existe el user usar el setError para que se vea en rojo que no esta
        - Usuario o contraseña incorrectas
    */
    
    setError(true);
} 
  
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            RESET PASSWORD
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              error= {error ? error : false} 
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => sendEmail()}
            >
              enviar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" >
                  volver
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}