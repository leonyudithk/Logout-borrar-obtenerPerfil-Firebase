import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeletCitas } from '../../redux/actions/actionCitas';


const Listar = () => {

    const dispatch= useDispatch()

    const {citas} =useSelector(store => store.citasStore)
        console.log(citas)


        return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Sintoma</th>
                    <th>Accion</th>
                </tr>

                </thead>
                <tbody>
                    {
                        citas.map((cita, index)=>(
                            <tr key={index}>
                                <td></td>
                                <td>{cita.fecha}</td>
                                <td>{cita.hora}</td>
                                <td>{cita.sintomas}</td>
                                <td><button type="button" className="btn btn-danger"
                                onClick={()=>dispatch(DeletCitas(cita.name))}
                                >Borrar</button></td>
                            </tr>
                        ))
                    }
                                       

                   
                </tbody>
            </table>
        </div>
    );
};

export default Listar;