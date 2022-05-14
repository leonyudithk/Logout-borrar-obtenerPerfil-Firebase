import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { FileUpload } from '../../helpers/FileUpload';
import useForm from '../../hooks/useForm';
import {addPlantaAsync} from '../../redux/actions/actionPlantas'

const Add = () => {

    const dispatch = useDispatch();

    const [formValue, handleInputChange, rest]= useForm({
        nombre: '',
        codigo: '',
        descripcion: '',
        tipo:'',
        precio: '',
        foto: ''

    })

    const {nombre, codigo, descripcion, tipo, precio}=formValue
     const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formValue)
        dispatch(addPlantaAsync(formValue))
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
             <Form onSubmit={handleSubmit} margin={50}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Planta</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" placeholder="Enter descripcion" value={descripcion} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Tipo</Form.Label>
                    <Form.Control type="text" name="tipo" placeholder="Tipo" value={tipo} onChange={handleInputChange} />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" placeholder="El precio en Pesos Colomb iano" value={precio} onChange={handleInputChange} />
                     <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="foto" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button type="submit">
                  Agregar
                </Button>
             
            </Form>
        </div>
    );
};

export default Add;