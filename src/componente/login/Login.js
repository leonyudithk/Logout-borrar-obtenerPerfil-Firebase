import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm'
import { loginAsync, loginGoogle, logoutAsync } from '../../redux/actions/actionLogin';

const Login = () => {
    const dispatch = useDispatch()

    const[formValue, handleInputChange, rest]=useForm({
        user: '',
        pass: ''
    })

    const {user, pass}= formValue

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formValue)
        dispatch(loginAsync(user, pass))
        rest()
    }

    return (
        <div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <hr />

                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Email</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="email"
                                name="user"
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                                value ={user}
                                onChange={handleInputChange}
                               

                            />
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Password</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="password"
                                name="pass"
                                className="form-control"
                                autoComplete="off"
                                value ={pass}
                                onChange={handleInputChange}
                          

                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={()=>dispatch(logoutAsync())}>
                        Logout
                    </button>
                    <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={()=>dispatch(loginGoogle())}
                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                
                </Container>
                <Container
                    className="google-btn"
                    onClick={()=>dispatch(loginGoogle())}
                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                
                </Container>
            </Container>
            <Link to="/register">Registrarse</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;