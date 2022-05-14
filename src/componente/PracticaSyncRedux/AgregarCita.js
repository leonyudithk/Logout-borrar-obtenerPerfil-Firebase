import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import { AddCitas } from '../../redux/actions/actionCitas';
import { logoutAsync } from '../../redux/actions/actionLogin';



const AgregarCita = () => {
   
    const dispatch = useDispatch()

    const [formValue, handleInputChange, rest]= useForm({
        name: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const {name, fecha, hora, sintomas}=formValue

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name, fecha,  hora, sintomas)
         dispatch(AddCitas(formValue))
        rest()

    }
    return (
        <div>
            <div>
               <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Agregar Citas</h1>
                    <hr />

                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                                value ={name}
                                onChange={handleInputChange}
                               

                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="date"
                                name="fecha"
                                className="form-control"
                                autoComplete="off"
                                value ={fecha}
                                onChange={handleInputChange}
                               

                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">hora</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="time"
                                name="hora"
                                className="form-control"
                                autoComplete="off"
                                value ={hora}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="form-group">
                            <textarea
                                name="sintomas"
                                className="form-control"
                                autoComplete="off"
                                value ={sintomas}
                                onChange={handleInputChange}
                               >
                            </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                    <button type="button" onClick={()=>dispatch(logoutAsync())} className="btn btn-primary">
                        Logout
                    </button>
                </form>
            </div>
        </div>
        </div>
        </div>
    );
};

export default AgregarCita;