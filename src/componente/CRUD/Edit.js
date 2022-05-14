import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { editPlantaAsync, editPlantaSync } from '../../redux/actions/actionPlantas';

const Edit = ({datos, setModal}) => {

    const dispatch = useDispatch()
//--------------Manejo del Modal--------------------//
//para el activar el modal
    const [show, setShow] = useState(true);

    //viene de react-boostrap y es para cerrar
    const handleClose = () => setShow(false);
   

//-------------------Manejo del formulario para editar---------------------------//
const [formValue, handleInputChange, rest]= useForm({
    nombre: datos.nombre,
    codigo: datos.codigo,
    descripcion: datos.descripcion,
    tipo: datos.tipo,
    precio: datos.precio,
  
})

const {nombre, codigo, descripcion, tipo, precio}=formValue

const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formValue)
    dispatch(editPlantaAsync(codigo, formValue))
    handleClose()
}
    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Planta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                    
                
                </Form.Group>

                <Button type="submit">
                 Editar
                </Button>
             
            </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                     
                    </Modal.Footer>
                </Modal>
            </>




        </div>
    );
};

export default Edit;