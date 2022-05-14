import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FileUpload } from '../../helpers/FileUpload';
import useForm from '../../hooks/useForm';
import { registerAsync } from '../../redux/actions/actionLogin';

const Register = () => {
    const dispatch = useDispatch()

  const  [formValue, handleInputChange, rest]=  useForm({
      nombre:'',
      email: '',
      pass1: '',
      pass2: '',
      foto: ''
  })

  const {nombre, email, pass1, pass2} = formValue

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(formValue)
      dispatch(registerAsync(email, pass1, nombre, formValue.foto))
      rest()
  }

  
  const handleFileChange =(e)=>{
    const file= e.target.files[0]
    //llamar a mi configuracion con cloudinary
    //le voy a enviar loq ue tengo en file
    FileUpload(file)
    .then(resp =>{
        formValue.foto =resp
        console.log(resp)
    })
    .catch(error =>{
        console.warn(error)
    })

}
    return (
        <div>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                       
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                  
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                       
                  
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                     
                    />
                </Form.Group>
                <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/login">Login</Link>

            </Form>
  
        </div>
    );
};

export default Register;