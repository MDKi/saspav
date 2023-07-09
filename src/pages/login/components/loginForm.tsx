import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from "next/link";
import { useState } from 'react';

export default function LoginForm (){
  const [error, setError] = useState(false);

  const verifyLogin = () => {
    console.log('Verificando el login... ');

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de sesión
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              error= {error ? error : false} 
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => verifyLogin()}
            >
              Inciar sesion
            </Button>
            <Grid container>
              <Grid item xs>
                  {/* //TODO: RECUPERAR PASSWORD */}
                <Link href="/resetPassword/resetPassword" >
                  ¿Olvido su contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}