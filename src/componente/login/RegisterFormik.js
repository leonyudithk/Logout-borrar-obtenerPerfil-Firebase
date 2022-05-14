import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { registerAsyncFormik } from '../../redux/actions/actionLogin';

const SignupSchema = Yup.object().shape({
   nombre: Yup.string()
    .min(2, 'Nombre es muy corto')
    .max(50, 'Nombre muy largo')
    .required('Este campo es requerido'),
  email: Yup.string().email('El email debe ser de tipo ana@gmail.com').required('Este campo es requerido'),
 pass1: Yup.string()
  .min(6, 'Clave muy corta')
  .max(10, 'Excede el largo de la clave')
  .required('Este campo es requerido').oneOf([Yup.ref('pass2')], 'Los password no coinciden'),
  pass2: Yup.string()
  .min(6, 'Clave muy corta')
  .max(10, 'Excede el largo de la clave')
  .required('Este campo es requerido').oneOf([Yup.ref('pass1')], 'Los password no coinciden'),


});


const RegisterFormik = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <h1>Formulario de Formik </h1>
                <Formik
                    initialValues={
                     {  
                        nombre:'',
                        email: '',
                        pass1: '',
                        pass2: ''
                    }
                    }
                    validationSchema={SignupSchema}
                    onSubmit = { values=>{ 
                        console.log(values.email, values.pass1, values.nombre)
                        dispatch(registerAsyncFormik(values.email, values.pass1, values.nombre))
                        
                    }}
                >
                {({ errors, touched, handleReset}) => (
                    <Form >
                        <Field name="nombre" type="text" placeholder="Ingrese Nombre" style={{ margin: "2%" }} />
                        {errors.nombre && touched.nombre ?
                            (<div>{errors.nombre}</div>) : null}

                        <Field name="email" type="email" placeholder="Ingrese Email" style={{ margin: "2%" }} />
                        {errors.email && touched.email ?
                            (<div>{errors.email}</div>) : null}

                        <Field name="pass1" type="password" placeholder="Ingrese Password 1" style={{ margin: "2%" }} />
                        {errors.pass1 && touched.pass1 ?
                            (<div>{errors.pass1}</div>) : null}

                        <Field name="pass2" type="password" placeholder="Ingrese Password 2" style={{ margin: "2%" }} />
                        {errors.pass2 && touched.pass2 ?
                            (<div>{errors.pass2}</div>) : null}

                            <button type="submit" className="btn btn-primary" style={{ margin: "2%" }}>Enviar</button>
                            <button  className="btn btn-primary" onClick ={handleReset}>Reset</button>
                    </Form>

                )}

            </Formik>
        </div>
    </div >
    );
};

export default RegisterFormik;