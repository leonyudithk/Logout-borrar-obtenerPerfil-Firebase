import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AgregarCita from '../componente/PracticaSyncRedux/AgregarCita';
import Listar from '../componente/PracticaSyncRedux/Listar';
import NavBars from '../componente/NavBars';
import Add from '../componente/CRUD/Add'
import List from '../componente/CRUD/List'
import Home from '../componente/Home';
import RegisterFormik from '../componente/login/RegisterFormik';
import Search from '../componente/CRUD/Search';
import Perfil from '../componente/login/Perfil';
const DashboarRouters = () => {
    return (
        <>
        <NavBars/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agregarcita" element={<AgregarCita />} />
                <Route path="/listCita" element={<Listar />} />
                <Route path="/add" element={<Add/>} />
                <Route path="/list" element={<List />} />
                <Route path="/formik" element={<RegisterFormik />} />
                <Route path="/search" element={<Search />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>



    );
};

export default DashboarRouters;