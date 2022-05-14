import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';
import { deletPlantaAsync, listPlantaAsync } from '../../redux/actions/actionPlantas';
import Edit from './Edit';


const List = () => {

    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);

    const { plantas } = useSelector(store => store.plantasStore)
    console.log(plantas)

    useEffect(() => {
        dispatch(listPlantaAsync()); //
    }, [dispatch])

    const editar = (planta) => {
        setModal(true)
        setDatos(planta)
    }


    return (
        <div>
            <table className="table">
                <thead>
                </thead>
                <tbody>
                    {
                        plantas.map((p, index) => (
                            <tr key={index}>
                                <td width='15%'>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            width: 100,
                                            height: 50,
                                            isFluidWidth: true,
                                            src: p.foto

                                        },
                                        largeImage: {
                                            src: p.foto,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />

                                </td>
                                <td>{p.nombre}</td>
                                <td>{p.precio}</td>
                                <td>
                                    <br />
                                    <button type="button" className="btn btn-danger" onClick={() => dispatch(deletPlantaAsync(p.codigo))}
                                    >Borrar</button>
                                    <br /><br />

                                    <button type="button" className="btn btn-success"
                                        onClick={() => editar(p)}
                                    >Editar</button><br /><br />

                                    <button type="button" className="btn btn-warning"
                                    >Detalle</button></td><br />
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {
                modal === true ? <Edit datos={datos} setModal={setModal} /> : ''
            }

        </div>
    );
};

export default List;