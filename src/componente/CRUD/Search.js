import { useFormik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup'
import { searchPlantaAsync } from '../../redux/actions/actionPlantas';
import List from './List';


const Search = () => {
    
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            search:''},
        validationSchema: Yup.object({
            search: Yup.string().required('campo requerido')
        }),
        onSubmit: ({search})=>{
            console.log(search)
            dispatch(searchPlantaAsync(search))
        }
    })

    return (
        <div>
            <center>
            <form onSubmit={formik.handleSubmit}>
                <input name="search" placeholder="Buscar por Nombre de la Planta" onChange={formik.handleChange}/>
                <Button type="submit">Search</Button>
            </form>
            <List/>
            </center>
        </div>
    );
};

export default Search;