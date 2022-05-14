import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogin';

const NavBars = () => {
    
    const dispatch = useDispatch()

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">App Plantas YL</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><Link to="/">Home </Link></Nav.Link>
                            <Nav.Link href="#features"><Link to="/add">Agregar </Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/list">Listar </Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/search">Buscar</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/formik">Registrar Formik y Yup</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to="/perfil">Perfil</Link></Nav.Link>
                        </Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={()=>dispatch(logoutAsync()) }>Logout</Nav.Link>
                            
                        </Nav>
                    </Container>
                </Navbar>
               
            </>
        </div>
    );
};

export default NavBars;