import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "~/utils/api";

// TODO: PASAR A LA CARPETA DE INTERFACES
export interface FormData {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  email: string;
  direccion: string;
  fechaNacimiento: string;
}


function Login() {

  const [formData, setFormData] = useState<FormData>({  
    nombre: '',
    apellido: '',
    dni:'',
    telefono: '',
    email: '',
    direccion:'',
    fechaNacimiento: '',
  });


  const {mutate} = api.example.save2.useMutation({
    onError: (error) => {
      console.log('tengo error :( ',error);
    },
    onSuccess: ({}) => {
      console.log('Mutacion confirmada loko')
    }
  })


  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;
    console.log('name, value >> ',name, value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log('formData >>> ',formData)
  };


  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    console.log('estamos registrando a una persona :)');
    console.log('este es el fordata >> ',formData)
    const response  = mutate(formData);
  } 


  return (
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col xs={5} >
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese nombre del usuario" name="nombre" value={formData.nombre} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese apellido del usuario" name="apellido" value={formData.apellido} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Ingrese el DNI del usuario" name="dni" value={formData.dni} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" placeholder="Ingrese el teléfono del usuario" name="telefono" value={formData.telefono} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Dirección de email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" name="email" value={formData.email} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" placeholder="Seleccione su fecha de nacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange}/>
        </Form.Group>

        <Form.Select className="mb-3" >
        <option>Default select</option>
        </Form.Select>
        <Button variant="primary"  type="submit">
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