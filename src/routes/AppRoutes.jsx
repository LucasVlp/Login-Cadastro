import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Cadastro from "../views/Cadastro.jsx";
import Login from "../views/Login.jsx";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                
            </Routes>
        </Router>
    )
}