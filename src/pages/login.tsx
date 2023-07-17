import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "~/utils/api";
import Link from 'next/link';
import { useState, useEffect } from 'react';


function Login() {
  const [redirectToMain, setRedirectToMain] = useState(false);

  const {mutate} = api.users.login.useMutation(({
    onError: (error) => {
      console.log('tengo un error en el login >>> ',error)

    },
    onSuccess: (data) => {
      console.log('login realizado con exito :) ',data);
      setRedirectToMain(true);

    }
  }));

  useEffect(() => {
    if (redirectToMain) {
      // Realiza la redirección a la página principal
      window.location.href = '/';
    }
  }, [redirectToMain]);

  const login = () => {
    console.log('estamos iniciando la session :)');
    // TODO: SACAR ESTO Y UTILIZAR EL FORM
    mutate({email:'fjgallardo97@gmail.com',password:'123456'})
    console.log('loggea3 >>> ')
  } 


  return (
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col xs={5} >
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
              <Link href="/register">
                ¿Olvidó su contraseña?
              </Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary"  onClick={() => login()}>
            Submit
          </Button>
        </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>








    </>
  );
}

export default Login;