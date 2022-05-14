import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ObtenerPerfil } from '../../redux/actions/actionLogin';

const Perfil = () => {
    const dispatch = useDispatch()
    return (
        <div>
           <Button onClick={()=> dispatch(ObtenerPerfil())}>Obtener Perfil</Button>
        </div>
    );
};

export default Perfil;
